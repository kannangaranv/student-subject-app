import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedStudent } from './assigned-student';

describe('AssignedStudent', () => {
  let component: AssignedStudent;
  let fixture: ComponentFixture<AssignedStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
