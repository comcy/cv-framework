import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { ContactConfigApi, ContactElement } from 'fw/contact/contactconfig-api';

// Test strings
let title: string = "Kontakt";
let contactList: Array<ContactElement> = [
    {
        icon: "call",
        contactText: "(+49) 1575 176 5444"
    },
    {
        icon: "mail",
        contactText: "max@mustermann.de"
    }
];


@Injectable()
export class ContactConfigService implements ContactConfigApi {

    constructor() { }


    getTitle(): Observable<any> {
        console.log("Get title");

        return Observable.of(title);
    }

    getContactlist(): Observable<Array<ContactElement>> {
        console.log("Get greeting");

        return Observable.of(contactList);
    }

}