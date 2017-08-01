import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestService } from '../rest.service';
import { CommunicationService } from '../communication.service';

import { APIDocument } from '../apiDocument';

@Component({
  selector: 'mir-meta',
  templateUrl: '../app/meta/meta.component.html',
  styleUrls: ['../app/meta/meta.component.css']
})
export class MetaComponent implements OnInit {
  document: APIDocument

  constructor(private _path: ActivatedRoute,
              private _comService: CommunicationService,
              private _restService: RestService) {
  }

  ngOnInit() {
    this._path.queryParams.subscribe(query => {
      let params = this._path.snapshot.params;
      this._restService.getDocument(params['docId']).then(newDocument => {
        this.document = newDocument;
        this._comService.setcurrentDocument(this.document);
      });
    });

  }
}