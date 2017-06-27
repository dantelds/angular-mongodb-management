import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {TranslateService} from '../../services/language.service';
import {InputModel} from '../../components/input/models/input.model';
import {ImageModel} from "../../components/image/models/image.model";
import {UserModel} from "../../shared/models/user.model";


@Component({
  selector: 'login-component',
  templateUrl: './templates/login.component.html',
  styleUrls: ['./assets/login.component.css']
})
export class LoginComponent {
  error: string = null;
  logo: ImageModel = new ImageModel('logo', '', '/images/logo.png');
  username:string;
  password:string;
  userInput: InputModel = new InputModel(this._translate.instant('user-username-required'), null, 'lg_username',
    this._translate.instant('user-username'), this.username, 'lg_username', this._translate.instant('user-username'), true, 'text' );

  passwordInput: InputModel = new InputModel(this._translate.instant('user-password-required'), null, 'lg_password',
    this._translate.instant('user-password'), this.password, 'lg_password', this._translate.instant('user-password'), true, 'password' );


  constructor(private GeneralService: GeneralService, private _translate: TranslateService) {
    if(this.GeneralService.token)
    {
      this.GeneralService.loginManagerEmmit(this.GeneralService.token);
    }
  }

  onLogin(Response:any) {
    this.error = null;    
    this.GeneralService.token = Response.token;
    this.GeneralService.loginManagerEmmit(Response.token);
  }

  onError(error: any) {
    this.passwordInput.model = '';
    this.error = error._body;
  }

  login() {
    var body: Object = {
      username: this.userInput.model,
      password: this.passwordInput.model
    };
    this.GeneralService.apiCall('post', 'login', body).subscribe((Response: any) => this.onLogin(Response), (Error: any) => this.onError(Error));

  }

}
