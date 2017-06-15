import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FwBodyComponent } from 'fw/body/body.component';

import { FwContainerHeaderComponent } from 'fw/header/header.component';

@NgModule({
  declarations: [
    FwBodyComponent,
    FwContainerHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [
      FwBodyComponent,
      FwContainerHeaderComponent,
  ]
})
export class FwModule { }
