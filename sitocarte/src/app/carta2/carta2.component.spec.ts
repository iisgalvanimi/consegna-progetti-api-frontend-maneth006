import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Carta2Component } from './carta2.component';

describe('Carta2Component', () => {
  let component: Carta2Component;
  let fixture: ComponentFixture<Carta2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carta2Component, HttpClientModule]
    });
    fixture = TestBed.createComponent(Carta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
