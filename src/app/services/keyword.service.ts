import {Keyword} from '../models/keyword.model';

export class KeywordService{
    keywords:Keyword[];
    constructor(){
        this.keywords = [new Keyword(1,"pens")]; //passing parameters through  static way
    }
    addKeyword(searchWord:string){
        var keyword:Keyword= new Keyword(this.keywords.length+1,searchWord);// creating object
        this.keywords.push(keyword);//push is used for iterating the images
    
    }
    getKeywords(){
        return this.keywords;
    }
}