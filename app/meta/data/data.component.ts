import { Component, OnInit, Input } from '@angular/core';

import { APIDocument } from '../../apiDocument';

@Component({
  selector: 'mir-data',
  templateUrl: './app/meta/data/data.component.html',
  styleUrls: ['./app/meta/data/data.component.css']
})
export class DataComponent implements OnInit {
  @Input() document: APIDocument ;

  constructor() { }

  ngOnInit() {
  }

}
