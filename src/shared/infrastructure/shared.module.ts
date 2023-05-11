import { Module } from '@nestjs/common';
import { FetchService } from './fetch.service';
import { HttpService } from '../domain/http.service';
import { FilterService } from '../domain/filter.service';
import { CustomFilterService } from '../application/custom-filter.service';

@Module({
  providers: [
    {
      provide: HttpService,
      useClass: FetchService,
    },
    {
      provide: FilterService,
      useClass: CustomFilterService,
    },
  ],
  exports: [HttpService, FilterService],
})
export class SharedModule {}
