import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FitstatsAppComponent } from '../app/fitstats.component';

beforeEachProviders(() => [FitstatsAppComponent]);

describe('App: Fitstats', () => {
  it('should create the app',
      inject([FitstatsAppComponent], (app: FitstatsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fitstats works!\'',
      inject([FitstatsAppComponent], (app: FitstatsAppComponent) => {
    expect(app.title).toEqual('fitstats works!');
  }));
});
