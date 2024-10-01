import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent implements OnInit {
  categories = [];

  constructor(private errorHandlerService: ErrorHandlerService,
    private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.categoryService.findAll().then(result => {
      this.categories = result;
    }).catch(error => this.errorHandlerService.handle(error));
  }
}
