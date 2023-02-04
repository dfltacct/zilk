import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subject, takeUntil, tap } from 'rxjs';
import * as _ from 'lodash-es';
import { DataService } from 'src/app/core/services/data.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cjk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();

  constructor( private router: Router) {
  }

  public ngOnDestroy(): void {
      this.ngUnsubscribe.next(undefined);
      this.ngUnsubscribe.complete();
  }

  public ngOnInit(): void {
  }

  public login() {
    this.router.navigate(['zilk']);    
  }

}
