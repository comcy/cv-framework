import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";

import { FwModule } from 'fw/fw.module';

import { AppComponent } from './app.component';
import { HeaderConfigService } from "app/services/headerconfig.service";
import { ContactConfigService } from "app/services/contactconfig.service";

import { HeaderConfigApi } from "fw/header/headerconfig-api";
import { ContactConfigApi } from "fw/contact/contactconfig-api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule
  ],
  providers: [
    HeaderConfigService,
    { provide: HeaderConfigApi, useExisting: HeaderConfigService },
    ContactConfigService,
    { provide: ContactConfigApi, useExisting: ContactConfigService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
