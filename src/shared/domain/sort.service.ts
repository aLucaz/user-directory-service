export abstract class SortService {
  abstract sortByAttribute<T>(objList: T[], attr: keyof T): T[];
}
