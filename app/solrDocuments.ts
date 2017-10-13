import { APIDocument } from './apiDocument'
import { APIAuthor } from './apiAuthor'
export class SolrDocuments {
    query: string;
    numFound: number;
    start: number;
    rows: number;
    documents: APIDocument[];

    constructor(solrJson: any) {
        // console.log(solrJson);
        this.documents = [];
        if (!solrJson.error) {
            let completeQ = solrJson.responseHeader.params.q;
            this.query = completeQ.substring(completeQ.indexOf(":") + 1);
            this.rows = solrJson.responseHeader.params.rows;
            this.numFound = solrJson.response.numFound;
            this.start = solrJson.response.start;
            let apiDocuments = this.documents
            if (solrJson.response.numFound > 0) {
                for (let doc of solrJson.response.docs) {
                    let autorArray: APIAuthor[] = [];
                    if (doc["mods.nameByRole.personal.aut"]) {
                        for (let aut of doc["mods.nameByRole.personal.aut"]) {
                            let splitAut = aut.split(":");
                            let autor: APIAuthor = {
                                name: splitAut[0] || "",
                                type: "",
                                gnd: splitAut[2] || ""
                            }
                            autorArray.push(autor);
                        }
                    }
                    let apiDocument: APIDocument = {
                        id: doc.id,
                        state: doc.state,
                        genre: doc["mods.type"],
                        title: doc["mods.title.main"],
                        subTitle: doc["mods.title.subtitle"],
                        lang: "",
                        abstract: doc["mods.abstract.result"],
                        typeOfResource: "",
                        author: autorArray,
                        date: doc["mods.dateIssued"],
                        doi: doc["identifier.type.doi"] ? doc["identifier.type.doi"][0] : "",
                        urn: doc["identifier.type.urn"] ? doc["identifier.type.urn"][0] : "",
                        accessCondition: ""
                    }
                    apiDocuments.push(apiDocument);
                }
            }
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
