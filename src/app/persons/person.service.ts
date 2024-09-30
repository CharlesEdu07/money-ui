import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';

export class PersonFilter {
  personName: string;
  page = 0;
  itensPerPage = 5;
}

@Injectable()
export class PersonService {
  personsUrl = 'http://localhost:8080/persons';

  constructor(private http: Http) { }

  async search(filter: PersonFilter): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOjE3MTk4MA==');

    params.set('page', filter.page.toString());
    params.set('size', filter.itensPerPage.toString());

    if (filter.personName) {
      params.set('personName', filter.personName);
    }

    return await this.http.get(`${this.personsUrl}`, { headers: headers, search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const content = responseJson.content;

        const result = {
          persons: content,
          totalElements: responseJson.totalElements
        };

        return result;
      });
  }

  async changeStatus(id: number, active: boolean): Promise<void> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOjE3MTk4MA==');
    headers.append('Content-Type', 'application/json');

    return await this.http.put(`${this.personsUrl}/${id}/active`, active, { headers: headers })
      .toPromise()
      .then(() => null);
  }

  async delete(id: number): Promise<void> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOjE3MTk4MA==');

    return await this.http.delete(`${this.personsUrl}/${id}`, { headers: headers })
      .toPromise()
      .then(() => null);
  }
}
