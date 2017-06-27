import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {SharedModule} from './shared/shared.module';

import {DashboardModule} from './modules/dashboard/dashboard.module';
import {ComingSoonModule} from './modules/coming-soon/coming-soon.module';
import {LoginModule} from './modules/login/login.module';


import {AppRoutingModule} from './app.routes';


import {TRANSLATION_PROVIDERS}   from './language/lang';
import {TranslateService}   from './services/language.service';
import {GeneralService} from './services/general.service';

import {AppComponent}  from './app.component';
import {MenuModule} from './components/menu/menu.module';
import {LogOutModule} from "./modules/log-out/log-out.module";
import {FooterModule} from "./components/footer/footer.module";


@NgModule({
  imports: [ ComingSoonModule, DashboardModule, FooterModule, LoginModule, LogOutModule, MenuModule,  SharedModule, FormsModule, BrowserModule, HttpModule, JsonpModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [GeneralService, TRANSLATION_PROVIDERS, TranslateService]
})
export class AppModule {
}
