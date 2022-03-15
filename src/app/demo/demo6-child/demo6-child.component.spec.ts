import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo6ChildComponent } from './demo6-child.component';

describe('Demo6ChildComponent', () => {
  let component: Demo6ChildComponent;
  let fixture: ComponentFixture<Demo6ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo6ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo6ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
