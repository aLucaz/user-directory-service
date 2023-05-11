export abstract class HttpService {
  abstract get(url: string, params?: string): Promise<unknown>;
}
