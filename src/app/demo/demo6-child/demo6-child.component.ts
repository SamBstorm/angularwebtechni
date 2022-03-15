import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEleve } from 'src/app/models/ieleve';

@Component({
  selector: 'app-demo6-child',
  templateUrl: './demo6-child.component.html',
  styleUrls: ['./demo6-child.component.scss']
})
export class Demo6ChildComponent implements OnInit {

  @Input() public eleve!:IEleve;
  @Output() public eleveClone : EventEmitter<IEleve>;
  
  constructor() {
    this.eleveClone = new EventEmitter<IEleve>();
   }

  ngOnInit(): void {
  }

  public cloner(){
    let clone : IEleve = {first_name : `Clone de ${this.eleve.first_name}`, last_name : this.eleve.last_name};
    this.eleveClone.emit(clone);
  }

}
