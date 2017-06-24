import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {UserModel} from "../../shared/models/user.model";


@Component({
  selector: 'arena-module',
  templateUrl: './templates/arena.component.html',
  styleUrls: ['./assets/arena.component.css']
})
export class ArenaComponent {

  warlock: UserModel = null;

  constructor(private GeneralService: GeneralService) {
    this.warlock = GeneralService.user;
  }

}
