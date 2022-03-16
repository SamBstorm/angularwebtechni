import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  public message : string = ""
  public sender? : string;
  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.message = this._activatedRoute.snapshot.params['msg'];
    this.sender = this._activatedRoute.snapshot.queryParams['sender'];
  }

}
