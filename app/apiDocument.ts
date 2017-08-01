import { APIAuthor } from './apiAuthor'
export interface APIDocument {
    id: string;
    state: string;
    genre: string;
    title: string;
    subTitle: string;
    lang: string;
    abstract: string;
    typeOfResource: string;
    author: APIAuthor[];
    date: string;
    doi: string;
    urn: string;
    accessCondition: string;
}