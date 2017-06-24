import {NgModule}           from '@angular/core';
import {ComingSoonComponent}     from './coming-soon.component';
import {ComingSoonRoutingModule} from './coming-soon-routing.module';
import {GeneralService} from '../../services/general.service';


@NgModule({
  declarations: [ComingSoonComponent],
  imports: [ComingSoonRoutingModule]
})
export class ComingSoonModule {
  constructor(private GeneralService: GeneralService){
    console.log('current user-------->', this.GeneralService.user);
  }
}
