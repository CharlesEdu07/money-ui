import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@Injectable()
export class PostingService {
  postingsUrl = 'http://localhost:8080/postings';

  constructor(private http: Http) { }

  search(): Promise<any> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOmFkbWlu');

    return this.http.get(`${this.postingsUrl}?projection`, { headers: headers })
      .toPromise()
      .then(response => response.json().content);
  }
}
