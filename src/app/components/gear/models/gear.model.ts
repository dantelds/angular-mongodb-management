import {ImageModel} from "../../image/models/image.model";
export class GearModel{
  private _description:string;
  private _header:string;
  private _image:ImageModel;
  constructor(description:string, header:string, image:ImageModel) {
    this._image = image;
    this._description = description;
    this._header = header;
  }

  get image(): ImageModel {
    return this._image;
  }

  set image(value: ImageModel) {
    this._image = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get header(): string {
    return this._header;
  }

  set header(value: string) {
    this._header = value;
  }
}
