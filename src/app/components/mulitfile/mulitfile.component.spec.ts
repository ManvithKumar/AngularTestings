import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulitfileComponent } from './mulitfile.component';

describe('MulitfileComponent', () => {
  let component: MulitfileComponent;
  let fixture: ComponentFixture<MulitfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MulitfileComponent]
    });
    fixture = TestBed.createComponent(MulitfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
