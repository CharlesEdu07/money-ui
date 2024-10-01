import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CategoryService {
  categoriesUrl = 'http://localhost:8080/categories';

  constructor(private http: Http) { }

  async findAll(): Promise<any> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AbW9uZXlhcGkuY29tOjE3MTk4MA==');

    return await this.http.get(`${this.categoriesUrl}`, { headers: headers })
      .toPromise()
      .then(response => {
        const result = response.json();

        return result;
      });
  }
}
