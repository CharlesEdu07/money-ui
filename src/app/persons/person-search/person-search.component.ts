import { Component, OnInit } from '@angular/core';
import { PersonFilter, PersonService } from '../person.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  totalRecords = 0;
  persons = [];

  personFilter = new PersonFilter();

  constructor(private errorHandlerService: ErrorHandlerService,
              private personService: PersonService,
              private toastyService: ToastyService) {
  }

  ngOnInit(): void {
    this.search();
  }

  search(page = 0) {
    this.personFilter.page = page;

    this.personService.search(this.personFilter).then(result => {
      this.totalRecords = result.totalElements;
      this.persons = result.persons;
    }).catch(error => this.errorHandlerService.handle(error));
  }

  async delete(id: number): Promise<void> {
    return this.personService.delete(id).then(() => {
      this.search();

      this.toastyService.success('Pessoa excluída com sucesso!');
    }).catch(error => this.errorHandlerService.handle(error));
  }

  onPaging(page: any) {
    this.search(page);
  }
}
