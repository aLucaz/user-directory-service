import { FilterService } from '../domain/filter.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomFilterService implements FilterService {
  filterByAttributes<T>(objList: T[], attrList: (keyof T)[]): Partial<T>[] {
    if (objList.length === 0) {
      return [];
    }
    return objList.map((obj) => {
      const filteredUser: Partial<T> = {};
      attrList.forEach((attribute) => {
        filteredUser[attribute] = obj[attribute];
      });
      return filteredUser;
    });
  }
}
