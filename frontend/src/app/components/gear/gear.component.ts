import {Component, Input, Output, EventEmitter} from '@angular/core';
import {GearModel} from "./models/gear.model";


@Component({
  selector: 'gear-component',
  templateUrl: './templates/gear.component.html',
  styleUrls: ['./assets/gear.component.css']
})
export class GearComponent{
  @Input() setup: GearModel = null;
  @Output() onGearClicked: EventEmitter<GearModel> = new EventEmitter<GearModel>();
  constructor() {
  }
  onClick(gear:GearModel){
    this.onGearClicked.emit(gear);
  }
}
