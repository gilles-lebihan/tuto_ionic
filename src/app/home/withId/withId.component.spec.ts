import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithIdComponent } from './withId.component';

describe('WithIdComponent', () => {
  let component: WithIdComponent;
  let fixture: ComponentFixture<WithIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithIdComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
