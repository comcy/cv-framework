import { Component, OnInit } from '@angular/core';

import { ContactConfigApi, ContactElement } from "fw/contact/contactconfig-api";

@Component({
  selector: 'fw-container-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class FwContainerContactComponent implements OnInit {

  private title: string;
  private contactList: Array<ContactElement>;

  constructor(private contactConfigApi: ContactConfigApi) { }

  ngOnInit() {
    // Get configurated title.
    this.contactConfigApi.getTitle().subscribe(val => this.title = val);
    
    // Get defined contact elements.
    this.contactConfigApi.getContactlist().subscribe(val => this.contactList = val);
  }
}
