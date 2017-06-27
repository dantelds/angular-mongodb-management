import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Subject}    from 'rxjs/Subject';
import 'rxjs/Rx';


@Injectable()
export class GeneralService {
  private _token:string;
  private loginManager: Subject<string> = new Subject<string>();

  constructor(private _http: Http) {
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  loginManagerEmmiter$ = this.loginManager.asObservable();

  loginManagerEmmit(token: string) {
    this.loginManager.next(token);
  }

  apiCall(action:string, url:string,  body:Object){
    url = 'http://localhost:3000/api/' + url;
    let headers = new Headers({'Content-Type': 'application/json'});
    if(this._token){
      headers.append('Authorization', this._token);
    }
    let options = new RequestOptions({headers: headers});
    if(action === 'get' || action === 'delete'){
      return this._http[action](url, options).map((response: Response) => <any> response.json());
    }
    else {
      return this._http[action](url, body, options).map((response: Response) => <any> response.json());
    }
  }
}
