import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  private config: any = {};

  constructor(private http: HttpClient) {}

  public loadAppConfig() {
    return this.http.get('/config/config.json').pipe(
      take(1),
      map((data: any) => {
        this.config = data;
        console.debug('properties: ' + JSON.stringify(this.config));
      }),
    );
  }

  public getEnvironment(): string {
    return this.config.env;
  }

  public getZilkBackendUrl(): string {
    return this.config.zilk_backend_url;
  }

  public isProduction(): boolean {
    return environment.production;
  }

  public getPortalScriptHost(): string {
    return this.config.portal_script_host;
  }

  public getPortalHost(): string {
    return this.config.portal_host;
  }
}
