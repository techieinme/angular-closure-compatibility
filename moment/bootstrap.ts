import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot/app.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
