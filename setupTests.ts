import '@testing-library/jest-dom/extend-expect';
import { DefaultTitleStrategy, TitleStrategy } from '@angular/router';
import { MockService, ngMocks } from 'ng-mocks';

ngMocks.defaultMock(TitleStrategy, () => MockService(DefaultTitleStrategy));

ngMocks.autoSpy('jest');

let consoleError: typeof console.error;

beforeAll(() => {
  consoleError = console.error;
  // Angular doesn't throw by default for components that can't by rendered, but will instead print an error.
  console.error = (...args: string[]) => {
    throw new Error(...args);
  };
});

afterAll(() => {
  console.error = consoleError;
});
