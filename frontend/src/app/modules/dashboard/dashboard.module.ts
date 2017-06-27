import {NgModule}           from '@angular/core';
import {DashboardComponent}     from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {GeneralService} from '../../services/general.service';


@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule]
})
export class DashboardModule {
  constructor(private GeneralService: GeneralService){
    console.log('current token-------->', this.GeneralService.token);
  }
}
