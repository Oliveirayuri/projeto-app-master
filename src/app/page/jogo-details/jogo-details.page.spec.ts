import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDetailsPage } from './jogodetails.page';

describe('JogoDetailsPage', () => {
  let component: JogoDetailsPage;
  let fixture: ComponentFixture<JogoDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
