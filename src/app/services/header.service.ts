import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { HeaderApi } from 'fw/header/header.api';

// Test strings
let name: string = "Christian Silfang";
let greeting: string = "Hallo,ich bin cool";
let picture: string = "no_avatar.jpg";


@Injectable()
export class HeaderService implements HeaderApi {

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