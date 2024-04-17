import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-float-animation',
  templateUrl: './float-animation.component.html',
//   styleUrls: ['./float-animation.component.css'],
  animations: [
    trigger('float', [
      state('up', style({
        transform: 'translateY(-20px)'
      })),
      state('down', style({
        transform: 'translateY(20px)'
      })),
      transition('up <=> down', animate('1000ms ease-in-out'))
    ])
  ]
})
export class FloatAnimationComponent {
  state = 'up';

  toggleState() {
    this.state = this.state === 'up' ? 'down' : 'up';
  }
}
