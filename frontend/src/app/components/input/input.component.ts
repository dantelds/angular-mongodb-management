import {Component, Input} from '@angular/core';
import {InputModel} from "./models/input.model";


@Component({
  selector: 'input-component',
  templateUrl: './templates/input.component.html',
  styleUrls: ['./assets/input.component.css']
})
export class InputComponent{
  @Input() setup: InputModel = null;
  constructor() {
  }
}
