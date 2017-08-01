import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { CommunicationService } from '../communication.service';

import { APIDocuments } from '../apiDocuments';


@Component({
  selector: 'app-search',
  templateUrl: '../app/search/search.component.html',
  styleUrls: ['../app/search/search.component.css']
})
export class SearchComponent implements OnInit {
  documents: APIDocuments

  constructor(private _comService: CommunicationService,
              private _restService: RestService) {
  }

  ngOnInit() {
    this._restService.getDocuments().then(newDocuments => {
      this.documents = newDocuments;
      this._comService.setcurrentDocuments(this.documents);
    });

  }
}
