import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { WarlockComponent }    from './warlock.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: WarlockComponent }
  ])],
  exports: [RouterModule]
})
export class WarlockRoutingModule {}
