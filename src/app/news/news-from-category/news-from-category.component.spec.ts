import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFromCategoryComponent } from './news-from-category.component';

describe('NewsFromCategoryComponent', () => {
  let component: NewsFromCategoryComponent;
  let fixture: ComponentFixture<NewsFromCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFromCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFromCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
