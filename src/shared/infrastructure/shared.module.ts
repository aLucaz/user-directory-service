import { Module } from '@nestjs/common';
import { FetchService } from './fetch.service';
import { HttpService } from '../domain/http.service';
import { FilterService } from '../domain/filter.service';
import { CustomFilterService } from '../application/custom-filter.service';
import { SortService } from '../domain/sort.service';
import { CustomSortService } from '../application/custom-sort.service';

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
    {
      provide: SortService,
      useClass: CustomSortService,
    },
  ],
  exports: [HttpService, FilterService, SortService],
})
export class SharedModule {}
