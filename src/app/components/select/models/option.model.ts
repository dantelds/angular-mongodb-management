export class OptionModel{
  private _text: string;
  private _value: string;


  constructor(text: string, value: string) {
    this._text = text;
    this._value = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
