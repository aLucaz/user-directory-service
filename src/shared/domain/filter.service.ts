export abstract class FilterService {
  abstract filterByAttributes<T>(
    objList: T[],
    attrList: (keyof T)[],
  ): Partial<T>[];
}
