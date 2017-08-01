/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrowsingComponent } from './browsing.component';

describe('BrowsingComponent', () => {
  let component: BrowsingComponent;
  let fixture: ComponentFixture<BrowsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
