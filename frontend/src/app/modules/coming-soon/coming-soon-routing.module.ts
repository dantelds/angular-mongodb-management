import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ComingSoonComponent }    from './coming-soon.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ComingSoonComponent }
  ])],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule {}
