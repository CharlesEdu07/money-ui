import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonFilter, PersonService } from '../person.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Person } from 'app/core/model';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent {
  @ViewChild('personTable') grid;

  totalRecords = 0;
  persons = [];

  personFilter = new PersonFilter();

  constructor(private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService,
    private personService: PersonService,
    private toastyService: ToastyService) {
  }

  search(page = 0) {
    this.personFilter.page = page;

    this.personService.search(this.personFilter).then(result => {
      this.totalRecords = result.totalElements;
      this.persons = result.persons;
    }).catch(error => this.errorHandlerService.handle(error));
  }

  onPaging(event: LazyLoadEvent) {
    const page = event.first / event.rows;

    this.search(page);
  }

  async changeStatus(person: Person): Promise<void> {
    const newActive = !person.active;

    this.personService.changeStatus(person.id, newActive).then(() => {
      const action = newActive ? 'ativada' : 'inativada';

      person.active = newActive;

      this.toastyService.success(`Pessoa ${action} com sucesso!`);
    }).catch(error => this.errorHandlerService.handle(error));
  }

  confirmDelete(person: Person) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.delete(person);
      }
    });
  }

  async delete(person: Person): Promise<void> {
    this.personService.delete(person.id).then(() => {
      if (this.grid.first === 0) {
        this.search();
      } else {
        this.grid.first = 0;
      }

      this.toastyService.success('Pessoa excluída com sucesso!');
    }).catch(error => this.errorHandlerService.handle(error));
  }
}
