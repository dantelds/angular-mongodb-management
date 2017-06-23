import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {GearModel} from "../../components/gear/models/gear.model";
import {ImageModel} from "../../components/image/models/image.model";
import {UserModel} from "../../shared/models/user.model";


@Component({
  selector: 'warlock-module',
  templateUrl: './templates/warlock.component.html',
  styleUrls: ['./assets/warlock.component.css']
})
export class WarlockComponent{
  warlock: UserModel = null;
  warlockImage: ImageModel = new ImageModel('warlock image', '', null);
  gear: GearModel = new GearModel('lorem ipsum dolor asit met', 'object', new ImageModel('', '', null));
  constructor(private GeneralService: GeneralService) {
    this.warlock = GeneralService.user;
  }

  onGearClicked(gear:GearModel, area:string){
  }
}
