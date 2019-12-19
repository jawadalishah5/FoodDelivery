import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroMenuComponent } from './retro-menu.component';

describe('RetroMenuComponent', () => {
  let component: RetroMenuComponent;
  let fixture: ComponentFixture<RetroMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
