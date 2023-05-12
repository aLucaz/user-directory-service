import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '../../shared/domain/http.service';
import { User } from '../domain/user.dto';
import { FilterService } from '../../shared/domain/filter.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { SortService } from '../../shared/domain/sort.service';

@Injectable()
export class GetUsersService {
  constructor(
    private httpService: HttpService,
    private filterService: FilterService,
    private sortService: SortService,
    private client: AmqpConnection,
  ) {}

  async execute() {
    const url = process.env.REPOSITORY_SERVICE_URL;
    const response = (await this.httpService.get(`${url}/users`)) as User[];
    const requiredAttributes = this.getRequiredAttributes();
    const filteredList = this.filterService.filterByAttributes(
      response,
      requiredAttributes,
    );
    const sortedList = this.sortService.sortByAttribute(filteredList, 'id');
    try {
      await this.client.publish(
        process.env.RABBIT_EXCHANGE,
        process.env.RABBIT_QUEUE,
        JSON.stringify(sortedList),
      );
    } catch (e) {
      console.error(`Error trying to send the message ${sortedList}`);
      throw new HttpException(
        'Error in the RabbitMQ conection',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return sortedList;
  }

  private getRequiredAttributes(): (keyof User)[] {
    return ['id', 'name', 'username', 'email', 'phone', 'website', 'company'];
  }
}
