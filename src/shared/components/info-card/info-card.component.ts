import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() maxwidth: number | string = '';
  @Input() bgcolor: number | string = '';
  @Input() border: number | string = '';
  @Input() padding: number | string = '';
  @Input() translateX: string = '-100px';

  @ViewChild('wrapper', { static: true }) wrapperRef!: ElementRef;
  isVisible = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(this.wrapperRef.nativeElement);
  }
}
