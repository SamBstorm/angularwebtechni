import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo2AddFormComponent } from './exo2-add-form.component';

describe('Exo2AddFormComponent', () => {
  let component: Exo2AddFormComponent;
  let fixture: ComponentFixture<Exo2AddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo2AddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo2AddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
