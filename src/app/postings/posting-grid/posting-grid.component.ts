import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posting-grid',
  templateUrl: './posting-grid.component.html',
  styleUrls: ['./posting-grid.component.css']
})
export class PostingGridComponent implements OnInit {
  @Input() postings = [];

  constructor() { }

  ngOnInit() {
  }

}
