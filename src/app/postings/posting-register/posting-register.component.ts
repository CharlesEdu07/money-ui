import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'app/categories/category.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';

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

  persons = [
    { label: 'João', value: '1' },
    { label: 'Maria', value: '2' },
    { label: 'José', value: '3' },
  ];

  categories: any[] = [];

  constructor(private categoryService: CategoryService,
    private errorHandler: ErrorHandlerService) {
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    return this.categoryService.findAll().then(result => {
      this.categories = result.map(category => ({ label: category.categoryName, value: category.id }));
    }).catch(error => this.errorHandler.handle(error));
  }
}
