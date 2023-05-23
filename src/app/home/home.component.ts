import { transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  scrollDown(){

    const distance = 700; //ne kadar gideceği
    const duration = 1500; //duracağı yer
    const startingY = window.pageYOffset; //scrolla başladığı nokta
    const targetY = startingY + distance; //hangi noktada duracağının formülü
    const easing = function(t) {
      return t * (2 - t);
    };
  
    let start;
  
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easing(progress);
  
      window.scrollTo(0, startingY + (ease * (targetY - startingY)));
  
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    });
  }

}
