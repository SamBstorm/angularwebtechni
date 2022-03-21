import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IMessage } from 'src/app/models/imessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messages: IMessage[] = [];
  public MessagesRefresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public newMessageSubject : Subject<number> = new Subject<number>();

  constructor() {
    setInterval(() => {
      this._messages.push({
        sender: 'Toto',
        receiver: 'Me',
        content: 'Do you see my previous message?',
        title: 'Message ' + (this._messages.length + 1)
      });
      this.MessagesRefresh.next(true);
      this.newMessageSubject.next(this._messages.length);
    },
      5000
    )
  }

  public getAll(): IMessage[] {
    return [...this._messages];
  }
}
