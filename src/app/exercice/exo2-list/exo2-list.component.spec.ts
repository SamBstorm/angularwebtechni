import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo2ListComponent } from './exo2-list.component';

describe('Exo2ListComponent', () => {
  let component: Exo2ListComponent;
  let fixture: ComponentFixture<Exo2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo2ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
