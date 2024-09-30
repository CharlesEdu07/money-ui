import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PersonFilter } from '../person.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-person-grid',
  templateUrl: './person-grid.component.html',
  styleUrls: ['./person-grid.component.css']
})
export class PersonGridComponent implements OnInit {
  @Input() totalRecords = 0;
  @Input() persons = [];
  @Input() personFilter = new PersonFilter();

  @Output() searchEmitter = new EventEmitter();
  @Output() onPagingEmitter = new EventEmitter();
  @Output() onDeleteEmitter = new EventEmitter();
  @Output() changeStatusEmitter = new EventEmitter();

  @ViewChild('personTable') personTable: any;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

  changeStatus(id: number, active: boolean) {
    this.changeStatusEmitter.emit({ id, active });
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

    if (this.personTable.first === 0) {
      this.searchEmitter.emit();
    } else {
      this.personTable.first = 0;
    }
  }

  onPaging(event: LazyLoadEvent) {
    const page = event.first / event.rows;

    this.onPagingEmitter.emit(page);
  }
}
