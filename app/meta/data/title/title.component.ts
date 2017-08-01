import { Component, OnInit, Input } from '@angular/core';

import { CommunicationService } from '../../../communication.service';

import { APIDocument } from '../../../apiDocument';

@Component({
  selector: 'mir-title',
  templateUrl: '../app/meta/data/title/title.component.html',
  styleUrls: ['../app/meta/data/title/title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() document: APIDocument;

  ngOnInit() {

  }

}
