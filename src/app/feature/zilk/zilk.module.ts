import { NgModule } from '@angular/core';
import { ZilkComponent } from './zilk.component';
import { WheelModule } from 'src/app/wheel/wheel.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [ZilkComponent],
  imports: [
    BrowserModule,
    WheelModule
  ],
  providers: [
  ],
  exports: [ZilkComponent]
})
export class ZilkModule {}
