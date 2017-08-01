import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { APIDocuments } from './apiDocuments'
import { APIDocument } from './apiDocument'

@Injectable()
export class RestService {
    getDocumentsURL: string = "/api"
    getDocumentURL: string = "/api/"

    constructor(private http: Http) { }

    getDocuments(): Promise<APIDocuments> {
        return this.http.get(this.getDocumentsURL)
                    .toPromise()
                    .then(res => res.json() as APIDocuments)
                    // .catch(this.handleError)
    }

    getDocument(docId: string): Promise<APIDocument> {
        return this.http.get(this.getDocumentURL + docId)
                    .toPromise()
                    .then(res => res.json() as APIDocument)
                    // .catch(this.handleError)
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}