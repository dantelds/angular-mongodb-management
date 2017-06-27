import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GeneralService} from '../../services/general.service';

@Component({
  selector: 'dashboard-module',
  templateUrl: './templates/dashboard.component.html',
  styleUrls:['./assets/dashboard.component.css']
})
export class DashboardComponent {

  bbdd:string;
  constructor(private params: ActivatedRoute, private GeneralService: GeneralService){
   this.getBbdd();
  }

  onSuccess(Response:any) {
    this.bbdd = Response;
    this.GeneralService.loginManagerEmmit(Response);
  }

  onError(error: any) {
  }

  getBbdd() {
    this.GeneralService.apiCall('get', 'databases', {}).subscribe((Response: any) => this.onSuccess(Response), (Error: any) => this.onError(Error));

  }

}
