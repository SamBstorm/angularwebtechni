import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo2ListItemComponent } from './exo2-list-item.component';

describe('Exo2ListItemComponent', () => {
  let component: Exo2ListItemComponent;
  let fixture: ComponentFixture<Exo2ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo2ListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo2ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
