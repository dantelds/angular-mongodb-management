import {Component} from '@angular/core';
import {GeneralService} from '../../services/general.service';
import {Router} from '@angular/router';


@Component({
  selector: 'log-out-module',
  templateUrl: './templates/log-out.component.html',
  styleUrls: ['./assets/log-out.component.css']
})
export class LogOutComponent {

  constructor(private GeneralService: GeneralService, private router: Router) {
    GeneralService.user = null;
    this.router.navigate(['/login']);
  }

}
