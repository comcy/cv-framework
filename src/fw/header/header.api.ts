import { Observable } from "rxjs/Observable";

export abstract class HeaderApi {

    getName: () => Observable<any>;

    getGreeting: () => Observable<any>;

    getPicture: () => Observable<any>;



}