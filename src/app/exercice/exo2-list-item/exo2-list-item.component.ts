import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo2-list-item',
  templateUrl: './exo2-list-item.component.html',
  styleUrls: ['./exo2-list-item.component.scss']
})
export class Exo2ListItemComponent implements OnInit {

  @Input() public product! : string;
  @Output() public deleteEvent : EventEmitter<boolean>;
  constructor() { 
    this.deleteEvent = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  
  public deleteProduct(){
    this.deleteEvent.emit(true);
  }

}
