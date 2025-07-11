import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStudent } from './assign-student';

describe('AssignStudent', () => {
  let component: AssignStudent;
  let fixture: ComponentFixture<AssignStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
