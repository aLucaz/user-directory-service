import { Controller, Get } from '@nestjs/common';
import { GetUsersService } from '../application/get-users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly getUsersService: GetUsersService) {}

  @Get()
  async getUsers() {
    return this.getUsersService.execute();
  }
}
