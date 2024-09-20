import { Component, OnInit } from '@angular/core';
import { PostingFilter, PostingService } from '../posting.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-posting-search',
  templateUrl: './posting-search.component.html',
  styleUrls: ['./posting-search.component.css']
})
export class PostingSearchComponent implements OnInit {
  totalRecords = 0;
  postings = [];

  postingFilter = new PostingFilter();

  constructor(private postingService: PostingService, private toastyService: ToastyService) { }

  ngOnInit() {
    this.search();
  }

  search(page = 0) {
    this.postingFilter.page = page;

    this.postingService.search(this.postingFilter).then(result => { this.totalRecords = result.totalElements; this.postings = result.postings });
  }

  async delete(id: number): Promise<void> {
    return this.postingService.delete(id).then(() => {
      this.search();

      this.toastyService.success('Lançamento excluído com sucesso!');
    });
  }

  onPaging(page: any) {
    this.search(page);
  }
}
