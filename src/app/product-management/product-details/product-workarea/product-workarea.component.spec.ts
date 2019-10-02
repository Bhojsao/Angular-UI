import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWorkareaComponent } from './product-workarea.component';

describe('ProductWorkareaComponent', () => {
  let component: ProductWorkareaComponent;
  let fixture: ComponentFixture<ProductWorkareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWorkareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWorkareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
