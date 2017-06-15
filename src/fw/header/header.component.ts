import { Component, OnInit } from '@angular/core';

import { HeaderApi } from "fw/header/header.api";

@Component({
  selector: 'fw-container-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class FwContainerHeaderComponent implements OnInit {

  private name: string;
  private greeting: string;
  private picture: string;

  constructor(private headerApi: HeaderApi) { }

  ngOnInit() {
    this.headerApi.getName().subscribe(val => this.name = val);
    this.headerApi.getGreeting().subscribe(val => this.greeting = val);
    this.headerApi.getPicture().subscribe(val => this.picture = val);
  }
}
