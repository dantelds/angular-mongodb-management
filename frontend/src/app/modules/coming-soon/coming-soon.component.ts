import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GeneralService} from '../../services/general.service';

@Component({
  selector: 'coming-soon-module',
  templateUrl: './templates/coming-soon.component.html',
  styleUrls:['./assets/coming-soon.component.css']
})
export class ComingSoonComponent {


  constructor(private params: ActivatedRoute, private GeneralService: GeneralService){
  }

}
