import { Component, OnInit, Input } from '@angular/core';

import { RestService } from '../../rest.service';
import { CommunicationService } from '../../communication.service';

import { SolrDocuments } from '../../solrDocuments';

@Component({
  selector: 'mir-list',
  templateUrl: '../app/search/list/list.component.html',
  styleUrls: ['../app/search/list/list.component.css']
})
export class ListComponent implements OnInit {
  @Input() documents: SolrDocuments;
  genres: string

  constructor(private _comService: CommunicationService,
    private _restService: RestService) {
  }

  ngOnInit() {
    this._restService.getClassifications("mir_genres").then(classifications => {
      this.genres = classifications;
    });

  }

  goToPage(page: number) { 
    this._restService.getSolrDocuments(this.documents.query, this.documents.rows * page, this.documents.rows).then(newDocuments => {
      // console.log(newDocuments);
      this.documents = newDocuments;
      this._comService.setcurrentDocuments(this.documents);
    });
  }

  getPagesArray() {
    let numPages = Math.floor(this.documents.numFound / this.documents.rows);
    let currentPage = this.documents.start / this.documents.rows;
    let pages = [];
    for (let i = currentPage - 3; i < currentPage + 4; i++) {
      if (i >= 0 && i < numPages + 1){
        pages.push(i);
      }
    }
    // console.log(pages);
    return pages;
  }

  getNumPages() {
    // console.log(Math.floor(this.documents.numFound / this.documents.rows))
    return Math.floor(this.documents.numFound / this.documents.rows);
  }

}
