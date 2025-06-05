import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ProjectlistComponent } from "./portfolio/projectlist/projectlist.component";
import { ContactComponent } from "./contact/contact.component";
import { LottieComponent } from "../lottie/lottie.component";
import { CarouselComponent } from "../carousel/carousel.component";



@Component({
  selector: 'app-main-content',
  imports: [HeroComponent, AboutComponent, SkillsComponent, ProjectlistComponent, TestimonialComponent, ProjectlistComponent, ContactComponent, LottieComponent, CarouselComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
