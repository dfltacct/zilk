import { Component, OnInit, ViewChild } from '@angular/core';
import { Business } from 'src/app/core/models/business';
import { Data } from 'src/app/core/models/data/Data';
import { TextAlignment, TextOrientation, WheelComponent } from 'src/app/wheel/wheel.component';

@Component({
  selector: 'cjk-zilk',
  templateUrl: './zilk.component.html',
  styleUrls: ['./zilk.component.scss']
})
export class ZilkComponent implements OnInit {
  @ViewChild(WheelComponent) wheel: WheelComponent;

  public debug: boolean = false;
  public today: Date = new Date();
  public seed = Data.businesses;
  public idToLandOn: any;
  public items: any[] = [];
  public winningItem: Business;
  public textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  public textAlignment: TextAlignment = TextAlignment.OUTER;
  
  
  public ngOnInit(){
    this.updateIdToLandOn();
    this.today = new Date();
    console.debug('land on: ' + this.idToLandOn);
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

    this.items = [];
    for (let i=0; i < Data.businesses.length; i++) {
      this.items.push({
        fillStyle: colors[i % colors.length],
        text: Data.businesses[i].name,
        id: Data.businesses[i].id,
        textFillStyle: 'white',
        textFontSize: '16'
      });
    }
  }
  
  public updateIdToLandOn() {
    this.idToLandOn = this.seed[(Math.floor(Math.random() * this.seed.length))].id;
  }

  public reset() {
    this.winningItem = undefined; 
    this.updateIdToLandOn();
    this.wheel.reset();
  }

  public before() {
    // alert('Your wheel is about to spin')
  }

  public async spin(prize: any) {
    this.idToLandOn = prize
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  public after() {
    this.winningItem = Data.businesses.find(b => b.id === this.idToLandOn);
    // alert('You have won ' + this.items[this.idToLandOn - 1].text)
  }
}