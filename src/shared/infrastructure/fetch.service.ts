import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { HttpService } from '../domain/http.service';

@Injectable()
export class FetchService implements HttpService {
  async get(url: string, params?: string): Promise<unknown> {
    let requestUrl = url;
    if (params) {
      const queryString = Object.keys(params)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
        )
        .join('&');
      requestUrl = `${requestUrl}?${queryString}`;
    }

    const fetchResponse = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const httpResponse = await fetchResponse.json();
    if (!fetchResponse.ok || !httpResponse) {
      throw new HttpException(
        `An error occurred calling ${requestUrl}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return httpResponse;
  }
}
