import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";

import { FwBodyComponent } from 'fw/body/body.component';

import { FwContainerHeaderComponent } from 'fw/header/header.component';
import { FwContainerContactComponent } from "fw/contact/contact.component";


@NgModule({
  declarations: [
    FwBodyComponent,
    FwContainerHeaderComponent,
    FwContainerContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [
      FwBodyComponent,
      FwContainerHeaderComponent,
      FwContainerContactComponent
  ]
})
export class FwModule { }
