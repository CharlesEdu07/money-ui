import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.css']
})
export class CategoryGridComponent implements OnInit {
  @Input() categories = [];

  @ViewChild('categoryTable') categoryTable: any;

  constructor() { }

  ngOnInit() {
  }
}
