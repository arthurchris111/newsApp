import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsApiServicesComponent } from './news-api-services.component';

describe('NewsApiServicesComponent', () => {
  let component: NewsApiServicesComponent;
  let fixture: ComponentFixture<NewsApiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsApiServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsApiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
