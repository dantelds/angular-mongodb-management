import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ArenaComponent }    from './arena.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ArenaComponent }
  ])],
  exports: [RouterModule]
})
export class ArenaRoutingModule {}
