import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRevealingEffectComponent } from './block-revealing-effect.component';

describe('BlockRevealingEffectComponent', () => {
  let component: BlockRevealingEffectComponent;
  let fixture: ComponentFixture<BlockRevealingEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockRevealingEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockRevealingEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
