import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';

export interface PostingFilter {
  postingDescription: string;
}

@Injectable()
export class PostingService {
  postingsUrl = 'http://localhost:8080/postings';

  constructor(private http: Http) { }

  async search(filter: PostingFilter): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOmFkbWlu');

    if (filter.postingDescription) {
      params.set('postingDescription', filter.postingDescription);
    }

    const response = await this.http.get(`${this.postingsUrl}?projection`, { headers: headers, search: params })
      .toPromise();
    return response.json().content;
  }
}
