import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PostingFilter } from '../posting.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-posting-grid',
  templateUrl: './posting-grid.component.html',
  styleUrls: ['./posting-grid.component.css']
})
export class PostingGridComponent implements OnInit {
  @Input() totalRecords = 0;
  @Input() postings = [];
  @Input() postingFilter = new PostingFilter();

  @Output() searchEmitter = new EventEmitter();
  @Output() onPagingEmitter = new EventEmitter();
  @Output() onDeleteEmitter = new EventEmitter();

  @ViewChild('postingTable') postingTable: any;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.confirmationService.confirm({
      message: "Tem certeza que deseja excluir o lançamento?",
      accept: () => {
        this.confirmDelete(id);
      }
    });
  }

  confirmDelete(id: number) {
    this.onDeleteEmitter.emit(id);

    if (this.postingTable.first === 0) {
      this.searchEmitter.emit();
    } else {
      this.postingTable.first = 0;
    }
  }

  onPaging(event: LazyLoadEvent) {
    const page = event.first / event.rows;

    this.onPagingEmitter.emit(page);
  }
}
