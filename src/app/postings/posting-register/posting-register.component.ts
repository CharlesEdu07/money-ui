import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryService } from 'app/categories/category.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Posting } from 'app/core/model';
import { PersonService } from 'app/persons/person.service';

@Component({
  selector: 'app-posting-register',
  templateUrl: './posting-register.component.html',
  styleUrls: ['./posting-register.component.css']
})
export class PostingRegisterComponent implements OnInit {
  postingTypes = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categories: any[] = [];
  persons: any[] = [];

  posting = new Posting();

  constructor(
    private categoryService: CategoryService,
    private errorHandlerService: ErrorHandlerService,
    private personService: PersonService) {
  }

  ngOnInit() {
    this.loadCategories();
    this.loadPersons();
  }

  save(form: FormControl) {
    console.log(this.posting);
    console.log(form.value);
  }

  async loadCategories() {
    try {
      const savedCategories = await this.categoryService.findAll();

      this.categories = savedCategories.map((category: { categoryName: any; id: any; }) => ({ label: category.categoryName, value: category.id }));
    } catch (error) {
      return this.errorHandlerService.handle(error);
    }
  }

  async loadPersons() {
    try {
      const savedPersons = await this.personService.findAll();

      this.persons = savedPersons.map((person: { personName: any; id: any; }) => ({ label: person.personName, value: person.id }));
    } catch (error) {
      return this.errorHandlerService.handle(error);
    }
  }
}
