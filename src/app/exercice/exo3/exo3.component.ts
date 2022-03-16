import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/iarticle';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  public articles : IArticle[] = [
    {name:'test1',quantity: 1}
  ];
  constructor(private _shoplistService : ShoppingListService) { }

  ngOnInit(): void {
    this.articles = this._shoplistService.articles;
  }
  
  public deleteArticle(name : string){
    this._shoplistService.delArticle(name);
    this.articles = this._shoplistService.articles;
  }
  
  public addQty(article : IArticle, qty : number){
    this._shoplistService.addQtyArticle({name : article.name, quantity : qty});
    this.articles = this._shoplistService.articles;
  }
  public subQty(article : IArticle, qty : number){
    this._shoplistService.subQtyArticle({name : article.name, quantity : qty});
    this.articles = this._shoplistService.articles;
  }

}
