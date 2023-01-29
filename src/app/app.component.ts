import { Component, OnInit } from '@angular/core';
import { IconService } from './core/services/icon.service';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'cjk-zilk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthenticationService, private iconService: IconService) {
  }

  public ngOnInit() {
    this.iconService.registerIcons();
  }
}
