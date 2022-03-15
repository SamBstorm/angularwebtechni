import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2-list',
  templateUrl: './exo2-list.component.html',
  styleUrls: ['./exo2-list.component.scss']
})
export class Exo2ListComponent implements OnInit {

  public products :string [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  public newProduct(productName: any){    
    this.products.unshift(productName);
  }

  public deleteProduct(index : number){
    this.products.splice(index,1);
  }

}
