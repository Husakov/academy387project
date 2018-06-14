import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BIMModelComponent } from './bimmodel.component';

describe('BIMModelComponent', () => {
  let component: BIMModelComponent;
  let fixture: ComponentFixture<BIMModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BIMModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BIMModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
