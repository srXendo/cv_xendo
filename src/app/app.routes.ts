import { Routes, withHashLocation } from '@angular/router';
import { Introduction } from './components/introduction/introduction';
import { Experience } from './components/experience/experience';
import { RootPath } from './components/root-path/root-path';
import { Hobby } from './components/hobby/hobby';
import { Contact } from './components/contact/contact';
export const routes: Routes = [
    { path: '', component: RootPath},
    { path: 'introduction', component: Introduction},
    { path: 'experience', component: Experience},
    { path: 'hobby', component: Hobby},
    { path: 'contact', component: Contact},

];
import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation())
    
  ]
};
