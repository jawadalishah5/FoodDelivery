import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyboComponent } from './kybo.component';

describe('KyboComponent', () => {
  let component: KyboComponent;
  let fixture: ComponentFixture<KyboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
