import {Injectable, Inject} from '@angular/core';
import {TRANSLATIONS} from '../language/lang';

@Injectable()
export class TranslateService {
  private _currentLang: string;
  private supportedLanguages: any[] = [
    {display: 'English', value: 'en'},
    {display: 'Español', value: 'es'}
  ];

  constructor(@Inject(TRANSLATIONS) private _translations: any) {
    if (!this._currentLang) {
      this.setDefaultLang();
    }
  }

  private setDefaultLang() {
    var language: string = navigator.language;
    if (language !== 'es' && language !== 'en') {
      language = 'en';
    }
    this.use(language);
  }

  public get currentLang() {
    return this._currentLang;
  }

  public use(lang: string): void {
    this._currentLang = lang;
  }

  public isCurrentLang(lang: string) {
    return lang === this.currentLang;
  }


  private translate(key: string): string {
    let translation = key;
    if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
      return this._translations[this.currentLang][key];
    }
    return translation;
  }

  public instant(key: string) {
    return this.translate(key);
  }
}
