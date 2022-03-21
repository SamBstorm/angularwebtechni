import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { SharedModule } from '../shared/shared.module';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo6ChildComponent } from './demo6-child/demo6-child.component';
import { Demo7Component } from './demo7/demo7.component';
import { UserService } from '../shared/services/user.service';
import { Demo8Component } from './demo8/demo8.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Demo9Component } from './demo9/demo9.component';
import { Demo10Component } from './demo10/demo10.component';
import { Demo11Component } from './demo11/demo11.component';
import { Demo12Component } from './demo12/demo12.component';
import { Demo13Component } from './demo13/demo13.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo6ChildComponent,
    Demo7Component,
    Demo8Component,
    Demo9Component,
    Demo10Component,
    Demo11Component,
    Demo12Component,
    Demo13Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
