import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  currImg = 0;
  arr = [0, 1, 2, 3, 4];
  slideID: any;
  next() {
    this.stop();
    if (this.currImg !== this.arr.length - 1) ++this.currImg;
  }
  prev() {
    this.stop();
    if (this.currImg !== 0) --this.currImg;
  }
  slideShow() {
    this.stop();
    this.slideID = setInterval(() => {
      this.currImg = this.currImg === this.arr.length - 1 ? 0 : this.currImg;
      this.currImg++;
    }, 1500);
  }
  stop() {
    clearInterval(this.slideID);
  }
}
