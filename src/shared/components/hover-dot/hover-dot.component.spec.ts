import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverDotComponent } from './hover-dot.component';

describe('HoverDotComponent', () => {
  let component: HoverDotComponent;
  let fixture: ComponentFixture<HoverDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverDotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
