import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseRecepitComponent } from './warehouse-recepit.component';

describe('ListComponent', () => {
  let component: WarehouseRecepitComponent;
  let fixture: ComponentFixture<WarehouseRecepitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseRecepitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseRecepitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
