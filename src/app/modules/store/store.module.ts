import {NgModule}           from '@angular/core';
import {StoreRoutingModule} from './store-routing.module';
import { StoreComponent }    from './store.component';


@NgModule({
  declarations:[StoreComponent],
  imports: [StoreRoutingModule]
})
export class StoreModule {
  constructor(){
  }
}
