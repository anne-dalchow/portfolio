import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderButtonComponent } from './placeholder-button.component';

describe('PlaceholderButtonComponent', () => {
  let component: PlaceholderButtonComponent;
  let fixture: ComponentFixture<PlaceholderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
