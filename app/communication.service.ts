import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import { APIDocument } from './apiDocument'
import { SolrDocuments } from './solrDocuments'

@Injectable()
export class CommunicationService {
  private _currentDocument = new Subject<APIDocument>();
  private _currentDocuments = new Subject<SolrDocuments>();

  currentDocument = this._currentDocument.asObservable();
  currentDocuments = this._currentDocuments.asObservable();

  setcurrentDocument(document: APIDocument) {
    this._currentDocument.next(document);
  }

  setcurrentDocuments(documents: SolrDocuments) {
    this._currentDocuments.next(documents);
  }
}