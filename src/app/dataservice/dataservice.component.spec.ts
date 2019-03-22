import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataserviceComponent } from './dataservice.component';

describe('DataserviceComponent', () => {
  let component: DataserviceComponent;
  let fixture: ComponentFixture<DataserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
