import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjects } from './view-subjects';

describe('ViewSubjects', () => {
  let component: ViewSubjects;
  let fixture: ComponentFixture<ViewSubjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSubjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
