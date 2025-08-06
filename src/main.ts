import 'zone.js';  // <--- Esto es lo que falta
import { bootstrapApplication } from '@angular/platform-browser';

import { App } from './app/app';
import { appConfig } from './app/app.routes';
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
