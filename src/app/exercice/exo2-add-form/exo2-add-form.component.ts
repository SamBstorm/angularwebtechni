import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo2-add-form',
  templateUrl: './exo2-add-form.component.html',
  styleUrls: ['./exo2-add-form.component.scss']
})
export class Exo2AddFormComponent implements OnInit {

  public productName : string = "";
  @Output() public productEvent : EventEmitter<string>;

  constructor() { 
    this.productEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  public addProduct(){
    if(this.productName.trim().length == 0) return;
    this.productEvent.emit(this.productName.trim());
    this.productName = "";
  }

}
