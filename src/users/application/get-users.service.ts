import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '../../shared/domain/http.service';
import { User } from '../domain/user.dto';
import { FilterService } from '../../shared/domain/filter.service';

@Injectable()
export class GetUsersService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
    private filterService: FilterService,
  ) {}

  async execute() {
    const url = this.configService.get<string>('REPOSITORY_SERVICE_URL');
    const response = (await this.httpService.get(`${url}/users`)) as User[];
    return this.filterService.filterByAttributes(response, [
      'id',
      'name',
      'username',
      'email',
      'phone',
      'website',
      'company',
    ]);
  }
}
