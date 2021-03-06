import { Component, OnInit } from '@angular/core';

import { HeaderConfigApi } from "fw/header/headerconfig-api";

@Component({
  selector: 'fw-container-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class FwContainerHeaderComponent implements OnInit {

  private name: string;
  private greeting: string;
  private picture: string;

  constructor(private headerConfigApi: HeaderConfigApi) { }

  ngOnInit() {
    // Get configurated name.
    this.headerConfigApi.getName().subscribe(val => this.name = val);
    
    // Get configurated greeting text.
    this.headerConfigApi.getGreeting().subscribe(val => this.greeting = val);
    
    // Get name  of the picture in assests folder. 
    this.headerConfigApi.getPicture().subscribe(val => this.picture = val);
  }
}
