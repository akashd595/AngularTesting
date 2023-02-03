import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadalQuotesComponent } from './badal-quotes.component';

describe('BadalQuotesComponent', () => {
  let component: BadalQuotesComponent;
  let fixture: ComponentFixture<BadalQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadalQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadalQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
