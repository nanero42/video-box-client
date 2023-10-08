import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabButtonComponent } from './tab-button.component';

describe('TabButtonComponent', () => {
  let component: TabButtonComponent;
  let fixture: ComponentFixture<TabButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabButtonComponent]
    });
    fixture = TestBed.createComponent(TabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
