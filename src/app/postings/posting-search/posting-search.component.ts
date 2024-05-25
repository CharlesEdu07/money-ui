import { Component, OnInit } from '@angular/core';
import { PostingService } from '../posting.service';

@Component({
  selector: 'app-posting-search',
  templateUrl: './posting-search.component.html',
  styleUrls: ['./posting-search.component.css']
})
export class PostingSearchComponent implements OnInit {
  postings = [];
  postingDescription: string;

  constructor(private postingService: PostingService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.postingService.search({ postingDescription: this.postingDescription }).then(postings => this.postings = postings);
  }
}
