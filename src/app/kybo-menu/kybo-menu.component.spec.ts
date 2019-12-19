import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyboMenuComponent } from './kybo-menu.component';

describe('KyboMenuComponent', () => {
  let component: KyboMenuComponent;
  let fixture: ComponentFixture<KyboMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyboMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyboMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
