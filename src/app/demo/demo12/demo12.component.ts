import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMessage } from 'src/app/models/imessage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrls: ['./demo12.component.scss']
})
export class Demo12Component implements OnInit, OnDestroy {

  public messages : IMessage[] = [];
  private _subMessages! : Subscription;

  constructor(private _messagerie : MessageService) { }
  
  ngOnDestroy(): void {
    this._subMessages.unsubscribe();
  }

  ngOnInit(): void {
    //this.messages = this._messagerie.getAll();
    this._subMessages = this._messagerie.MessagesRefresh.subscribe({
      next : (datas) => {this.messages = this._messagerie.getAll()},
      error : (err) => console.error(err),
      complete : () => console.log("Fin de réception des données")
    });
  }

}
