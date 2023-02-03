import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingProgramsComponent } from './testing-programs.component';

describe('TestingProgramsComponent', () => {
  let component: TestingProgramsComponent;
  let fixture: ComponentFixture<TestingProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
