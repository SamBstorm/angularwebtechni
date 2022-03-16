import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-exo3add-article',
  templateUrl: './exo3add-article.component.html',
  styleUrls: ['./exo3add-article.component.scss']
})
export class Exo3addArticleComponent implements OnInit {

  public productName : string = "";
  constructor(private _shopListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  public addProduct(){
    this._shopListService.addArticle({name:this.productName, quantity : 1});
    this.productName="";
  }
}
