import {Component} from '@angular/core';
import {GeneralService} from './services/general.service';
import {TranslateService} from './services/language.service';
import {Router} from '@angular/router';
import {LinkModel} from "./components/link/models/link.model";
import {FooterModel} from "./components/footer/models/footer.model";
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  menuLinks: LinkModel[] = [
    new LinkModel('', 'warlock', this._translate.instant('menu-warlock')),
    new LinkModel('', 'school', this._translate.instant('menu-school')),
    new LinkModel('', 'dungeon', this._translate.instant('menu-dungeons')),
    new LinkModel('', 'arena', this._translate.instant('menu-arena')),
    new LinkModel('', 'store', this._translate.instant('menu-store')),
    new LinkModel('', 'logOut', this._translate.instant('menu-log-out'))];
  footer: FooterModel = new FooterModel(null, this._translate.instant('copyright'));

  constructor(private _translate: TranslateService, private GeneralService: GeneralService, private router: Router) {
    this.router.navigate(['/login']);
    this.createLoginListener();
  }

  private createLoginListener() {
    this.GeneralService.loginManagerEmmiter$.subscribe(User => {
      this.onUserLogin();
    });
  }

  private onUserLogin() {
    this.router.navigate(['/warlock']);
  }


  onModuleClicked(module: LinkModel) {
  }


}
