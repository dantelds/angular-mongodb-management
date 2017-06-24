export class LinkModel{
  private _extraClass: string;
  private _href: string;
  private _text: string;


  constructor(extraClass: string, href: string, text: string) {
    this._extraClass = extraClass;
    this._href = href;
    this._text = text;
  }

  get extraClass(): string {
    return this._extraClass;
  }

  set extraClass(value: string) {
    this._extraClass = value;
  }

  get href(): string {
    return this._href;
  }

  set href(value: string) {
    this._href = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
