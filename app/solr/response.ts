import { APIDocument } from '../apiDocument'
import { APIAuthor } from '../apiAuthor'
export interface SolrResponse {
    query(queryParam: string): string;
    start(): number;
    rows(): number;
    numFound(): number;

    documents(): APIDocument[];
}