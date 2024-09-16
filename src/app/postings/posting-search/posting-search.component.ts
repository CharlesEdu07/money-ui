import { Component, OnInit } from '@angular/core';
import { PostingFilter, PostingService } from '../posting.service';

@Component({
  selector: 'app-posting-search',
  templateUrl: './posting-search.component.html',
  styleUrls: ['./posting-search.component.css']
})
export class PostingSearchComponent implements OnInit {
  postings = [];

  postingFilter = new PostingFilter();

  constructor(private postingService: PostingService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.postingService.search(this.postingFilter).then(result => { this.postings = result.postings });
  }
}
