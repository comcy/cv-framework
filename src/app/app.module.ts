import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FwModule } from 'fw/fw.module';

import { AppComponent } from './app.component';
import { HeaderService } from "app/services/header.service";
import { HeaderApi } from "fw/header/header.api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule
  ],
  providers: [
    HeaderService,
    { provide: HeaderApi, useExisting: HeaderService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
