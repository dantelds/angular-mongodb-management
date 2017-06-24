export class ImageModel{
  private _alt: string;
  private _extraClass: string;
  private _src: string;



  constructor(alt: string, extraClass: string, src: string) {
    this._src = src;
    this._alt = alt;
    this._extraClass = extraClass;
  }

  get src(): string {
    return this._src;
  }

  set src(value: string) {
    this._src = value;
  }

  get alt(): string {
    return this._alt;
  }

  set alt(value: string) {
    this._alt = value;
  }

  get extraClass(): string {
    return this._extraClass;
  }

  set extraClass(value: string) {
    this._extraClass = value;
  }
}
