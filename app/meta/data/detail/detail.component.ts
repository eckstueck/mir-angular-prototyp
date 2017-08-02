import { Component, OnInit, Input } from '@angular/core';

import { APIDocument } from '../../../apiDocument';

@Component({
  selector: 'mir-detail',
  templateUrl: './app/meta/data/detail/detail.component.html',
  styleUrls: ['./app/meta/data/detail/detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() document: APIDocument;

  constructor() { }

  ngOnInit() {
  }

}
