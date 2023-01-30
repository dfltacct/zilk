import { Component, ViewChild } from '@angular/core';
import { TextAlignment, TextOrientation, WheelComponent } from './wheel/wheel.component';
@Component({
  selector: 'cjk-zilk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(WheelComponent) wheel: WheelComponent;

  seed = [...Array(12).keys()]
  idToLandOn: any;
  items: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
  public ngOnInit(){
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    this.idToLandOn = 3;
    const colors = ['#FF0000', '#000000']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
      text: `Prize ${value}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))
  }
  reset() {
    this.wheel.reset()
  }
  before() {
    // alert('Your wheel is about to spin')
  }

  async spin(prize: any) {
    this.idToLandOn = prize
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  after() {
    alert('You have won ' + this.items[this.idToLandOn].text)
  }
}