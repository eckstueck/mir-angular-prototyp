import { APIDocument } from '../apiDocument'
import { APIAuthor } from '../apiAuthor'
import { SolrResponse } from './response'
export class GroupedResponse implements SolrResponse {
    _json: any;

    static parse(solrJson: any) {
        return new GroupedResponse(solrJson);
    }

    constructor(solrJson: any) {
        this._json = solrJson;
    }

    public query(queryParam: string): string {
        return this._json.responseHeader.params[queryParam];
    }

    public start(): number {
        return this._json.responseHeader.params.start;
    }

    public rows(): number {
        return this._json.responseHeader.params.rows;
    }

    public numFound(): number {
        return this._json.grouped != undefined ? this._json.grouped.returnId.matches : 0;
    }

    public documents(): APIDocument[] {
        let apiDocuments = [];

        if (this.numFound() > 0) {
            for (let group of this._json.grouped.returnId.groups) {
                let doc = group.doclist.docs[0];
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

        return apiDocuments;
    }
}