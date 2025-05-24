import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorGlowComponent } from './cursor-glow.component';

describe('CursorGlowComponent', () => {
  let component: CursorGlowComponent;
  let fixture: ComponentFixture<CursorGlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorGlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursorGlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
