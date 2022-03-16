import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo3addArticleComponent } from './exo3add-article.component';

describe('Exo3addArticleComponent', () => {
  let component: Exo3addArticleComponent;
  let fixture: ComponentFixture<Exo3addArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo3addArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo3addArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
