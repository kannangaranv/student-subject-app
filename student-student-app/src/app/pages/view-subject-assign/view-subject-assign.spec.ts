import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectAssign } from './view-subject-assign';

describe('ViewSubjectAssign', () => {
  let component: ViewSubjectAssign;
  let fixture: ComponentFixture<ViewSubjectAssign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSubjectAssign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubjectAssign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
