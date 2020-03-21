import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFullComponent } from './product-full.component';

describe('ProductFullComponent', () => {
  let component: ProductFullComponent;
  let fixture: ComponentFixture<ProductFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
