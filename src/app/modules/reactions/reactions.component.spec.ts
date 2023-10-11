import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionsComponent } from './reactions.component';

describe('ReactionsComponent', () => {
  let component: ReactionsComponent;
  let fixture: ComponentFixture<ReactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactionsComponent]
    });
    fixture = TestBed.createComponent(ReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
