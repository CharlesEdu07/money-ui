import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostingFilter } from '../posting.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-posting-grid',
  templateUrl: './posting-grid.component.html',
  styleUrls: ['./posting-grid.component.css']
})
export class PostingGridComponent implements OnInit {
  @Input() totalRecords = 0;
  @Input() postings = [];
  @Input() postingFilter = new PostingFilter();

  @Output() onPagingEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPaging(event: LazyLoadEvent) {
    const page = event.first / event.rows;

    this.onPagingEmitter.emit(page);
  }
}
