import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '../enums/icons.enum';


@Injectable({ providedIn: 'root' })
export class IconService {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  public registerIcons() {
    for (const icon of Object.values(Icons)) {
      this.matIconRegistry.addSvgIcon( icon, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`) );
    }
  }

}
