import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {TranslateService} from '../../services/language.service';
import {InputModel} from "../../components/input/models/input.model";
import {UserModel} from "../../shared/models/user.model";
import {SelectModel} from "../../components/select/models/select.model";
import {OptionModel} from "../../components/select/models/option.model";
@Component({
  selector: 'sign-up-module',
  templateUrl: './templates/sign-up.component.html',
  styleUrls: ['./assets/sign-up.component.css']
})
export class SignUpComponent {

  error: string = null;
  schoolText: string = null;
  user: UserModel = this.GeneralService.returnEmptyUser();

  userInput: InputModel = new InputModel(this._translate.instant('user-username-required'), null, 'su_username',
    this._translate.instant('user-username'), '', 'su_username', this._translate.instant('user-username'), true, 'text' );

  passwordInput: InputModel = new InputModel(this._translate.instant('user-password-required'), null, 'su_password',
    this._translate.instant('user-password'), '', 'su_password', this._translate.instant('user-password'), true, 'password' );

  nameInput: InputModel = new InputModel(this._translate.instant('user-name-required'), null, 'su_name',
    this._translate.instant('user-username'), '', 'su_name', this._translate.instant('user-name'), true, 'text' );

  lastNameInput: InputModel = new InputModel(this._translate.instant('user-lastName-required'), null, 'su_lastName',
    this._translate.instant('user-lastName'), '', 'su_lastName', this._translate.instant('user-lastName'), true, 'text' );

  genderOptions: Array<OptionModel> = [
    new OptionModel(this._translate.instant('user-select-gender'), ''),
    new OptionModel(this._translate.instant('Male'), 'Male'),
    new OptionModel(this._translate.instant('Female'), 'Female')
  ]

  genderSelect: SelectModel = new SelectModel(this._translate.instant('user-gender-required'), '', 'su_gender',
    this._translate.instant('user-gender'), '', 'su_gender', this.genderOptions, true);




  birthDateInput: InputModel = new InputModel(this._translate.instant('user-birthDate-required'), null, 'su_birthDate',
    this._translate.instant('user-birthDate'), '', 'su_birthDate', this._translate.instant('user-birthDate'), true, 'date' );


  schoolOptions: Array<OptionModel> = [
    new OptionModel(this._translate.instant('user-select-school'), ''),
    new OptionModel(this._translate.instant('earth'), 'earth'),
    new OptionModel(this._translate.instant('fire'), 'fire'),
    new OptionModel(this._translate.instant('water'), 'water'),
    new OptionModel(this._translate.instant('wind'), 'wind')
  ]

  schoolSelect: SelectModel = new SelectModel(this._translate.instant('user-school-required'), '', 'su_school',
    this._translate.instant('user-school'), '', 'su_school', this.schoolOptions, true);



  constructor(private GeneralService: GeneralService, private _translate: TranslateService) {
    if(this.GeneralService.user)
    {
      this.GeneralService.loginManagerEmmit(this.GeneralService.user);
    }
  }

  setInitialAttributes(strength: number, magic: number, health: number) {
    this.user.strength = strength;
    this.user.magic = magic;
    this.user.health = health;
  }

  onSelectSchool(selectedOption:string){
    this.user.school = selectedOption;
    switch (this.user.school) {
      case 'earth':
        this.schoolText = this._translate.instant('school-earth-advantages');
        this.setInitialAttributes(7, 2, 3);
        break;
      case 'fire':
        this.schoolText = this._translate.instant('school-fire-advantages');
        this.setInitialAttributes(2, 7, 3);
        break;
      case 'water':
        this.schoolText = this._translate.instant('school-water-advantages');
        this.setInitialAttributes(4, 4, 4);
        break;
      case 'wind':
        this.schoolText = this._translate.instant('school-wind-advantages');
        this.setInitialAttributes(2, 3, 7);
        break;
      default:
        this.schoolText = null;
        break;
    }
  }


  onSignUp(user: UserModel) {
    this.error = null;
    this.GeneralService.user =  new UserModel(user.birthDate, user.gender, user.health, user.lastName, user.magic,
      user.name, user.password, user.username, user.school, user.strength);
    this.GeneralService.loginManagerEmmit(user);
  }

  onError(error: any) {
    this.error = error._body;
  }

  signUp() {
    this.user = new UserModel(this.birthDateInput.model, this.genderSelect.model, this.user.health, this.lastNameInput.model, this.user.magic,
      this.nameInput.model, this.passwordInput.model, this.userInput.model, this.schoolSelect.model, this.user.strength);
    this.GeneralService.apiCall('post', 'signup', this.user)
      .subscribe((Response:any) => this.onSignUp(Response), (Error:any) => this.onError(Error));
  }

}
