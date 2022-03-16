import { Injectable } from '@angular/core';
import { IArticle } from 'src/app/models/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  public articles : IArticle[] = [
    {name:'tomates', quantity:6}
  ];
  constructor() { }

  public addArticle(article : IArticle){
    if(this.articles.filter(a=>a.name == article.name).length>0){
      this.addQtyArticle(article);
    }
    else{
      this.articles.unshift(article);
    }
  }
  public delArticleByIndex(index : number){
    this.articles.splice(index, 1);
  }
  public delArticle(name : string){
    this.articles = this.articles.filter(a=> a.name != name);
  }

  public addQtyArticle(article : IArticle){
    if(article.quantity <= 0) throw new Error("La quantité se doit d'être positive");
    
    this.articles.filter(a => a.name == article.name)[0].quantity += article.quantity;
  }
  public subQtyArticle(article : IArticle){
    let old = this.articles.filter(a=>a.name == article.name)[0];
    if(old.quantity <= article.quantity)
      this.delArticle(article.name);
    else
      old.quantity -= article.quantity;
  }
}
