import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';


@Component({
  selector: 'store',
  templateUrl: './templates/store.component.html',
  styleUrls: ['./assets/store.component.css']
})
export class StoreComponent {


  constructor(private GeneralService: GeneralService) {
  }

}
