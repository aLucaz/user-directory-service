import { Module } from '@nestjs/common';
import { GetUsersService } from '../application/get-users.service';
import { UsersController } from './users.controller';
import { SharedModule } from '../../shared/infrastructure/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [UsersController],
  providers: [GetUsersService],
})
export class UsersModule {}
