import { Injectable } from '@nestjs/common';
import { SortService } from '../domain/sort.service';
import { AllowedAttributeTypes } from '../domain/types/AllowedAttributeTypes';

Injectable();
export class CustomSortService implements SortService {
  sortByAttribute<T>(objList: T[], attr: keyof T): T[] {
    if (objList.length === 0) {
      return [];
    }
    const predicateFn = this.getPredicate(objList, attr);
    return objList.sort(predicateFn);
  }

  private getPredicate<T>(objList: T[], attr: keyof T): (a: T, b: T) => number {
    const first = objList[0];
    const attrType = typeof first[attr] as AllowedAttributeTypes;
    switch (attrType) {
      case AllowedAttributeTypes.STRING:
        return (a, b) => {
          const aStr = a[attr] as string;
          const bStr = b[attr] as string;
          return aStr.localeCompare(bStr);
        };
      case AllowedAttributeTypes.NUMBER:
      default:
        return (a, b) => {
          const aNum = a[attr] as number;
          const bNum = b[attr] as number;
          return bNum - aNum;
        };
    }
  }
}
