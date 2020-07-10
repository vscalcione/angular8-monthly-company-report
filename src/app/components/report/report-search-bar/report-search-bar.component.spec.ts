import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSearchBarComponent } from './report-search-bar.component';

describe('ReportSearchBarComponent', () => {
  let component: ReportSearchBarComponent;
  let fixture: ComponentFixture<ReportSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
