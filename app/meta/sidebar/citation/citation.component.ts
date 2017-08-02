import { Component, OnInit, Input } from '@angular/core';

import { APIDocument } from '../../../apiDocument';

@Component({
  selector: 'mir-citation',
  templateUrl: './app/meta/sidebar/citation/citation.component.html',
  styleUrls: ['./app/meta/sidebar/citation/citation.component.css']
})
export class CitationComponent implements OnInit {
  @Input() document: APIDocument;

  constructor() { }

  ngOnInit() {
  }

}
