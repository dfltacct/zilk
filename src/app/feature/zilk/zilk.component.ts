import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subject, takeUntil, tap } from 'rxjs';
import * as _ from 'lodash-es';
import { DataService } from 'src/app/core/services/data.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ConsoleLogger } from 'src/app/core/shared/console-logger';

@Component({
  selector: 'cjk-zilk',
  templateUrl: './zilk.component.html',
  styleUrls: ['./zilk.component.scss'],
})
export class ZilkComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();


  constructor( private authService: AuthenticationService,
               private dataService: DataService) {
  }


  public ngOnDestroy(): void {
      this.ngUnsubscribe.next(undefined);
      this.ngUnsubscribe.complete();
  }


  public ngOnInit(): void {
    ConsoleLogger.debug('oninit');
  }


}
