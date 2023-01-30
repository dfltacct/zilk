import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvironmentService } from './core/services/environment.service';
import { WheelModule } from './wheel/wheel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    WheelModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [EnvironmentService],
      useFactory: (envService: EnvironmentService) => {
        return () => {
          return envService.loadAppConfig();
        };
      },
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
