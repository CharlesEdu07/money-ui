import { Component, OnInit } from '@angular/core';
import { PostingFilter, PostingService } from '../posting.service';

@Component({
  selector: 'app-posting-search',
  templateUrl: './posting-search.component.html',
  styleUrls: ['./posting-search.component.css']
})
export class PostingSearchComponent implements OnInit {
  totalRecords = 0;
  postings = [];

  postingFilter = new PostingFilter();

  constructor(private postingService: PostingService) { }

  ngOnInit() {
    this.search();
  }

  search(page = 0) {
    this.postingFilter.page = page;

    this.postingService.search(this.postingFilter).then(result => { this.totalRecords = result.totalElements; this.postings = result.postings });
  }

  onPaging(page: any) {
    this.search(page);
  }
}
