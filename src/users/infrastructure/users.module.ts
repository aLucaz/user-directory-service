import { Module } from '@nestjs/common';
import { GetUsersService } from '../application/get-users.service';
import { UsersController } from './users.controller';
import { SharedModule } from '../../shared/infrastructure/shared.module';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    SharedModule,
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: async () => ({
        exchanges: [
          {
            name: process.env.RABBIT_EXCHANGE,
            type: 'fanout',
          },
        ],
        uri: process.env.RABBIT_URI,
      }),
    }),
    // RabbitMQModule.forRoot(RabbitMQModule, {
    //   exchanges: [
    //     {
    //       name: process.env.RABBIT_EXCHANGE,
    //       type: 'fanout',
    //     },
    //   ],
    //   uri: process.env.RABBIT_URI,
    // }),
  ],
  controllers: [UsersController],
  providers: [GetUsersService],
})
export class UsersModule {}
