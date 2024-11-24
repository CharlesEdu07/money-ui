import { Component, OnInit, ViewChild } from '@angular/core';
import { PostingFilter, PostingService } from '../posting.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Posting } from 'app/core/model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posting-search',
  templateUrl: './posting-search.component.html',
  styleUrls: ['./posting-search.component.css']
})
export class PostingSearchComponent implements OnInit {
  @ViewChild('postingTable') grid;

  postings = [];
  totalRecords = 0;

  postingFilter = new PostingFilter();

  constructor(private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService,
    private postingService: PostingService,
    private title: Title,
    private toastyService: ToastyService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de lançamentos');
  }

  search(page = 0) {
    this.postingFilter.page = page;

    this.postingService.search(this.postingFilter).then(result => {
      this.totalRecords = result.totalElements;
      this.postings = result.postings;
    }).catch(error => this.errorHandlerService.handle(error));
  }

  onPaging(event: LazyLoadEvent) {
    const page = event.first / event.rows;

    this.search(page);
  }

  confirmDelete(posting: Posting) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.delete(posting);
      }
    });
  }

  async delete(posting: Posting): Promise<void> {
    return this.postingService.delete(posting.id).then(() => {
      if (this.grid.first === 0) {
        this.search();
      } else {
        this.grid.first = 0;
      }

      this.toastyService.success('Lançamento excluído com sucesso!');
    }).catch(error => this.errorHandlerService.handle(error));
  }
}
