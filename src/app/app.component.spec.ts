import { render } from '@testing-library/angular';
import { MockModule, MockService } from 'ng-mocks';

import { AuthenticationService } from './core/services/authentication.service';
import { AppComponent } from './app.component';
import { HighlightsModule } from './feature/highlights/highlights.module';
import { ReportsModule } from './feature/reports/reports.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const imports = [MockModule(HighlightsModule), MockModule(ReportsModule), HttpClientTestingModule];

describe('AppComponent', () => {
  it('should create the app', async () => {
    const { container } = await setupComponent();

    expect(container).toBeTruthy();
    expect(container).toBeInTheDocument();
  });
});

const setupComponent = async ({
  properties = {},
  providers: [authService = MockService(AuthenticationService)] = [],
} = {}) =>
  render(AppComponent, {
    imports: [...imports],
    componentProperties: {
      ...properties,
    },
    componentProviders: [
      {
        provide: AuthenticationService,
        useValue: authService,
      },
    ],
  });