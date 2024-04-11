import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiformComponent } from './multiform.component';

describe('MultiformComponent', () => {
  let component: MultiformComponent;
  let fixture: ComponentFixture<MultiformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiformComponent]
    });
    fixture = TestBed.createComponent(MultiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
