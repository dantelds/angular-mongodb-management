import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';


@Component({
  selector: 'dungeon-module',
  templateUrl: './templates/dungeon.component.html',
  styleUrls: ['./assets/dungeon.component.css']
})
export class DungeonComponent {


  constructor(private GeneralService: GeneralService) {
  }

}
