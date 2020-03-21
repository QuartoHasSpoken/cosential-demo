import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmFinancesComponent } from './firm-finances.component';

describe('FirmFinancesComponent', () => {
  let component: FirmFinancesComponent;
  let fixture: ComponentFixture<FirmFinancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmFinancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
