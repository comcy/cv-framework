import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { HeaderConfigApi } from 'fw/header/headerconfig-api';

// Test strings
let name: string = "Max Mustermann, M. Sc.";
let greeting: string = "Herzlich willkommen. Mein Name ist Max Mustermann, mit dieser Seite präsentiere ich meine Vita.";
let picture: string = "no_avatar.jpg";

@Injectable()
export class HeaderConfigService implements HeaderConfigApi {

  constructor() {  }


  getName(): Observable<any> {
    console.log("Get name");

    return Observable.of(name);
  }

  getGreeting(): Observable<any> {
    console.log("Get greeting");

    return Observable.of(greeting);
  }

  getPicture(): Observable<any> {
    console.log("Get picture");

    return Observable.of(picture);
  }

}