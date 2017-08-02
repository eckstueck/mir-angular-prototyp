import { Component, OnInit, Input } from '@angular/core';

import { APIDocument } from '../../../apiDocument';

@Component({
  selector: 'mir-rights',
  templateUrl: './app/meta/sidebar/rights/rights.component.html',
  styleUrls: ['./app/meta/sidebar/rights/rights.component.css']
})
export class RightsComponent implements OnInit {
  @Input() document: APIDocument;

  constructor() { }

  ngOnInit() {
  }

}
