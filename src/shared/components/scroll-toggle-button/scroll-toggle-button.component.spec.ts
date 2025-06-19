import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToggleButtonComponent } from './scroll-toggle-button.component';

describe('ScrollToggleButtonComponent', () => {
  let component: ScrollToggleButtonComponent;
  let fixture: ComponentFixture<ScrollToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToggleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
