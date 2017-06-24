/**
 * Created by David on 13/04/2017.
 */
export class InputModel{
  private _error: string;
  private _extraClass: string;
  private _id: string;
  private _label: string;
  private _model: string;
  private _name: string;
  private _placeholder: string;
  private _required: boolean;
  private _type: string;


  constructor(error: string, extraClass: string, id: string, label: string, model: string, name: string,
              placeholder: string, required: boolean, type: string) {
    this._error = error;
    this._extraClass = extraClass;
    this._id = id;
    this._label = label;
    this._model = model;
    this._name = name;
    this._placeholder = placeholder;
    this._required = required;
    this._type = type;
  }

  get error(): string {
    return this._error;
  }

  set error(value: string) {
    this._error = value;
  }

  get extraClass(): string {
    return this._extraClass;
  }

  set extraClass(value: string) {
    this._extraClass = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(value: string) {
    this._placeholder = value;
  }

  get required(): boolean {
    return this._required;
  }

  set required(value: boolean) {
    this._required = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
