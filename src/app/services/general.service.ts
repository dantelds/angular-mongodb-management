import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Subject}    from 'rxjs/Subject';
import 'rxjs/Rx';
import {UserModel} from "../shared/models/user.model";


@Injectable()
export class GeneralService {
  user: UserModel = null;
  private loginManager: Subject<UserModel> = new Subject<UserModel>();

  constructor(private _http: Http) {
  }

  loginManagerEmmiter$ = this.loginManager.asObservable();

  loginManagerEmmit(user: UserModel) {
    this.loginManager.next(user);
  }

  returnEmptyUser() {
    return new UserModel('', '', 0, '', 0, '', '', '', '', 0);
  }

  apiCall(action:string, url:string,  body:Object){
    url = 'http://localhost:3000/api/' + url;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    if(action === 'get' || action === 'delete'){
      return this._http[action](url, options).map((response: Response) => <any> response.json());
    }
    else {
      return this._http[action](url, body, options).map((response: Response) => <any> response.json());
    }
  }
}
