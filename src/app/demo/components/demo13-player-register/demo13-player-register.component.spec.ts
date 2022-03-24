import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13PlayerRegisterComponent } from './demo13-player-register.component';

describe('Demo13PlayerRegisterComponent', () => {
  let component: Demo13PlayerRegisterComponent;
  let fixture: ComponentFixture<Demo13PlayerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo13PlayerRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13PlayerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
