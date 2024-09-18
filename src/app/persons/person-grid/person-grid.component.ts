import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonFilter } from '../person.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-person-grid',
  templateUrl: './person-grid.component.html',
  styleUrls: ['./person-grid.component.css']
})
export class PersonGridComponent implements OnInit {
  @Input() totalRecords = 0;
  @Input() persons = [];
  @Input() personFilter = new PersonFilter();

  @Output() onPagingEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPaging(event: LazyLoadEvent) {
    const page = event.first / event.rows;

    this.onPagingEmitter.emit(page);
  }
}
