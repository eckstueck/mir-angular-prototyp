import { APIDocument } from './apiDocument'
import { APIAuthor } from './apiAuthor'
import { SolrParser } from './solr/parser'
export class SolrDocuments {
    queryParam: string = "condQuery";
    isGrouped: boolean = true;
    query: string;
    numFound: number;
    start: number;
    rows: number;
    documents: APIDocument[];

    constructor(solrJson: any) {
        // console.log(solrJson);
        this.documents = [];
        if (!solrJson.error) {
            let response = SolrParser.parse(solrJson);
            this.query = response.query(this.queryParam);
            this.start = response.start();
            this.rows = response.rows();
            this.numFound = response.numFound();
            this.documents = response.documents();
        }

        // let autor: APIAuthor = {
        //     name: "",
        //     type: "",
        //     gnd: ""
        // }
        // let autorArray: APIAuthor[] = [];
        // autorArray.push(autor);
        // let test: APIDocument = {
        //     id: "1",
        //     state:"2",
        //     genre: "3",
        //     title: "4",
        //     subTitle: "5",
        //     lang: "6",
        //     abstract: "7",
        //     typeOfResource: "8",
        //     author: autorArray,
        //     date: "9",
        //     doi: "10",
        //     urn: "11",
        //     accessCondition: "12"
        // }

        // this.documents.push(test);
    }
}
