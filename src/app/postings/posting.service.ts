import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Posting } from 'app/core/model';
import * as moment from 'moment';

export class PostingFilter {
  postingDescription: string;
  dueDateFrom: Date;
  dueDateTo: Date;
  page = 0;
  itensPerPage = 5;
}

@Injectable()
export class PostingService {
  postingsUrl = 'http://localhost:8080/postings';

  constructor(private http: Http) { }

  async search(filter: PostingFilter): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOjE3MTk4MA==');

    params.set('page', filter.page.toString());
    params.set('size', filter.itensPerPage.toString());

    if (filter.postingDescription) {
      params.set('postingDescription', filter.postingDescription);
    }

    if (filter.dueDateFrom) {
      params.set('dueDateFrom', moment(filter.dueDateFrom).format('YYYY-MM-DD'));
    }

    if (filter.dueDateTo) {
      params.set('dueDateTo', moment(filter.dueDateTo).format('YYYY-MM-DD'));
    }

    return await this.http.get(`${this.postingsUrl}?projection`, { headers: headers, search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const content = responseJson.content;

        const result = {
          postings: content,
          totalElements: responseJson.totalElements
        };

        return result;
      });
  }

  async findById(id: number): Promise<Posting> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOjE3MTk4MA==');
    headers.append('Content-Type', 'application/json');

    return await this.http.get(`${this.postingsUrl}/${id}`, { headers: headers })
      .toPromise()
      .then(response => response.json());
  }

  async save(posting: Posting): Promise<Posting> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOjE3MTk4MA==');
    headers.append('Content-Type', 'application/json');

    return await this.http.post(this.postingsUrl, JSON.stringify(posting), { headers: headers })
      .toPromise()
      .then(response => response.json());
  }

  async delete(id: number): Promise<void> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOjE3MTk4MA==');

    return await this.http.delete(`${this.postingsUrl}/${id}`, { headers: headers })
      .toPromise()
      .then(() => null);
  }

  async update(id: number, posting: Posting): Promise<Posting> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOjE3MTk4MA==');
    headers.append('Content-Type', 'application/json');

    return await this.http.put(`${this.postingsUrl}/${id}`, JSON.stringify(posting), { headers: headers })
      .toPromise()
      .then(response => response.json());
  }

  convertStringToDate(posting: Posting[]) {
    for (const p of posting) {
      p.dueDate = moment(p.dueDate, 'YYYY-MM-DD').toDate();
    }

    return posting;
  }
}
