import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Carta3Component } from './carta3.component';

describe('Carta3Component', () => {
  let component: Carta3Component;
  let fixture: ComponentFixture<Carta3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carta3Component, HttpClientModule]
    });
    fixture = TestBed.createComponent(Carta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
