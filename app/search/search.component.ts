import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestService } from '../rest.service';
import { CommunicationService } from '../communication.service';

import { SolrDocuments } from '../solrDocuments';


@Component({
  selector: 'app-search',
  templateUrl: '../app/search/search.component.html',
  styleUrls: ['../app/search/search.component.css']
})
export class SearchComponent implements OnInit {
  documents: SolrDocuments

  constructor(private _path: ActivatedRoute,
              private _comService: CommunicationService,
              private _restService: RestService) {
    _comService.currentDocuments.subscribe(documents => {
      this.documents = documents;
    });
  }

  ngOnInit() {
    this._path.queryParams.subscribe(query => {
      let params = this._path.snapshot.params;
      this._restService.getSolrDocuments(params.query, params.start, 20).then(newDocuments => {
        console.log(newDocuments);
        // this.documents = newDocuments;
        this._comService.setcurrentDocuments(newDocuments);
      });
    });

  }
}
