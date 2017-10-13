import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
// import { HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// import {parseString} from 'xml2js';

import 'rxjs/add/operator/toPromise';

// var parseString = require('xml2js').parseString;

import { SolrDocuments } from './solrDocuments'
import { APIDocument } from './apiDocument'

@Injectable()
export class RestService {
    getDocumentsURL: string = "/solr"
    // getDocumentsURL: string = "/api";
    // getDocumentURL: string = "https://www.db-thueringen.de/api/v1/objects/dbt_mods_00032997/";
    getDocumentURL: string = "/api/"
    getClassificationsURL: string = "/classifications/"
    

    constructor(private http: Http) { 
        // var xml = "<root>Hello xml2js!</root>"
        // parseString(xml, function (err, result) {
        //     console.dir(result);
        // });
    }

    getSolrDocuments(query: string, start: number, rows: number): Promise<SolrDocuments> {
        return this.http.get(this.getDocumentsURL, {params: {
            query: query,
            start: start,
            rows: rows
        }})
                    .toPromise()
                    .then(res => new SolrDocuments(res.json()))
                    // .catch(this.handleError)
    }

    // getDocument(docId: string){
    //     return this.http.get(this.getDocumentURL + docId)
    //     .subscribe(
    //         // Successful responses call the first callback.
    //         data => {
    //             console.log(data.json());
    //         },
    //         // Errors will call this callback instead:
    //         err => {
    //           console.log('Something went wrong!');
    //         }
    //     );
    // }

    getDocument(docId: string): Promise<string> {
        return this.http.get(this.getDocumentURL + docId)
                    .toPromise()
                    .then(res => res.text())
                    // .catch(this.handleError)
    }

    getClassifications(classID: string): Promise<string> {
        return this.http.get(this.getClassificationsURL + classID)
                    .toPromise()
                    .then(res => res.text())
                    // .catch(this.handleError)
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}