import { APIDocument } from '../apiDocument'
import { APIAuthor } from '../apiAuthor'
import { GroupedResponse } from './grouped'
import { SimpleResponse } from './simple'
export class SolrParser {

    static parse(solrJson: any) {
        if (solrJson.response != undefined) {
            return SimpleResponse.parse(solrJson);
        } else if (solrJson.grouped != undefined) {
            return GroupedResponse.parse(solrJson);
        }

        return null;
    }

}