import { Component, OnInit } from '@angular/core';
import { PersonFilter, PersonService } from '../person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  totalRecords = 0;
  persons = [];

  personFilter = new PersonFilter();

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.search();
  }

  search(page = 0) {
    this.personFilter.page = page;

    this.personService.search(this.personFilter).then(result => { this.totalRecords = result.totalElements; this.persons = result.persons });
  }

  onPaging(page: any) {
    this.search(page);
  }
}
