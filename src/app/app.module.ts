import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EnvironmentService } from './core/services/environment.service';
import { ZilkModule } from './feature/zilk/zilk.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './core/shared/guards/AuthGuard';
import { LoginModule } from './feature/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    LoginModule,
    ZilkModule
  ],
  providers: [
    AuthGuard,
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
