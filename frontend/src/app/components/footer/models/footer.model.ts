import {LinkModel} from "../../link/models/link.model";

export class FooterModel{
  private _links:Array<LinkModel>;
  private _message:string;

  constructor(links: Array<LinkModel>, message: string) {
    this._links = links;
    this._message = message;
  }

  get links(): Array<LinkModel> {
    return this._links;
  }

  set links(value: Array<LinkModel>) {
    this._links = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
