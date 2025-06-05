import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  ngAfterViewInit(): void {
    const container = this.scrollContainer.nativeElement;

    container.addEventListener("wheel", (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
      container.style.scrollBehavior = "auto";
    });
  }

  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    container.style.scrollBehavior = 'smooth';
    container.scrollLeft -= 900;
  }

  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    container.style.scrollBehavior = 'smooth';
    container.scrollLeft += 900;
  }
}