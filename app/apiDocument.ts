import { APIAuthor } from './apiAuthor'

var $ = require('jquery');

export class APIDocument {
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

    constructor(documentXML: any) {
        // console.log($.parseXML(documentXML));
        let xml = $($.parseXML(documentXML));
        let apiDoc = this;
        this.id = xml.find("mycoreobject").attr("ID");
        this.state = xml.find("servstate").attr("categid");
        let genreString = xml.find($.escapeSelector("mods:genre") + "[type='intern']").attr("valueURI").split("#");
        this.genre = genreString[genreString.length - 1];
        this.title = xml.find($.escapeSelector("mods:title")).html();
        this.subTitle = xml.find($.escapeSelector("mods:subTitle")).html();
        this.lang = xml.find($.escapeSelector("mods:languageTerm")).html();
        this.abstract = xml.find($.escapeSelector("mods:abstract")).first().html();
        this.typeOfResource = xml.find($.escapeSelector("mods:typeOfResource")).html();
        this.author = [];
        xml.find($.escapeSelector("mods:name")).each(function(index: any, element: any) {
            let author: APIAuthor = {
                name: $(element).find($.escapeSelector("mods:displayForm")).html(),
                type: $(element).find($.escapeSelector("mods:roleTerm")).html(),
                gnd: $(element).find($.escapeSelector("mods:nameIdentifier")).html()
            }
            apiDoc.author.push(author);
        });
        this.date = xml.find($.escapeSelector("mods:originInfo") + "[eventType='publication']").find($.escapeSelector("mods:dateIssued")).html();
        this.doi = xml.find($.escapeSelector("mods:identifier") + "[type='doi']").html();
        this.urn = xml.find($.escapeSelector("mods:identifier") + "[type='urn']").html();
        let accessConditionString = xml.find($.escapeSelector("mods:accessCondition") + "[type='use and reproduction']").attr("xlink:href").split("#");
        this.accessCondition = accessConditionString[accessConditionString.length - 1];
        
        // console.log(this);
    }
}