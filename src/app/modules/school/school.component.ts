import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {UserModel} from "../../shared/models/user.model";
import {ImageModel} from "../../components/image/models/image.model";


@Component({
  selector: 'school-module',
  templateUrl: './templates/school.component.html',
  styleUrls: ['./assets/school.component.css']
})
export class SchoolComponent {

  warlock: UserModel = null;
  schoolPicture: ImageModel = new ImageModel('school picture','','');

  constructor(private GeneralService: GeneralService) {
    this.warlock = GeneralService.user;
  }

}
