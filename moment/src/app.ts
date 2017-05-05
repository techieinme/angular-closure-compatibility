import { Component, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import moment from '../adapter-src/moment-adapter';

@Component({
  selector: 'hello',
  template: `<div>{{message}}</div>`,
})
export class Hello {
  message: string;
  constructor() {
    this.message = `Happy ${moment().format('dddd')}`;
  }
}

@NgModule({
  declarations: [Hello],
  bootstrap: [Hello],
  imports: [BrowserModule],
})
export class AppModule {
}
