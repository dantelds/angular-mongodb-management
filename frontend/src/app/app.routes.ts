import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'},
  {path: 'login', loadChildren: 'app/modules/login/login.module#LoginModule'},
  {path: 'logOut', loadChildren: 'app/modules/log-out/log-out.module#LogOutModule'},
  {path: 'coming-soon', loadChildren: 'app/modules/coming-soon/coming-soon.module#ComingSoonModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
