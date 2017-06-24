import {Component, Input, Output, EventEmitter} from '@angular/core';
import {LinkModel} from "./models/link.model";


@Component({
  selector: 'link-component',
  templateUrl: './templates/link.component.html',
  styleUrls: ['./assets/link.component.css']
})
export class LinkComponent{
  @Output() onLinkClicked: EventEmitter<LinkModel> = new EventEmitter<LinkModel>();

  @Input() setup: LinkModel = null;
  constructor() {
  }

  onClick(link:LinkModel){
    this.onLinkClicked.emit(link);
  }
}
