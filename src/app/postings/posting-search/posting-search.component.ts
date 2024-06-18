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
  dueDateFrom: Date;
  dueDateTo: Date;

  constructor(private postingService: PostingService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    const filter = {
      postingDescription: this.postingDescription,
      dueDateFrom: this.dueDateFrom,
      dueDateTo: this.dueDateTo
    }

    this.postingService.search(filter).then(postings => this.postings = postings);
  }
}
