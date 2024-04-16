import { Component } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  images:string[]=[
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1622354506417-b34c589b36f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1520967824495-b529aeba26df?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]
  destroy$ = new Subject<void>();
  currentIndex = 0;
  autoplayInterval:any

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  startAutoplay() {
    this.autoplayInterval = interval(3000) // Change interval time as needed
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.next();
      });
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      this.autoplayInterval.unsubscribe();
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  
 
}
