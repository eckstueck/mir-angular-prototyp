import { Component, OnInit, Input } from '@angular/core';

import { APIDocument } from '../../apiDocument';

@Component({
  selector: 'mir-badges',
  templateUrl: '../app/meta/badges/badges.component.html',
  styleUrls: ['../app/meta/badges/badges.component.css']
})
export class BadgesComponent implements OnInit {
  @Input() document: APIDocument;
  @Input() genres: string;

  constructor() { }

  ngOnInit() {
  }

}
