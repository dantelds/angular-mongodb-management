import {Component, Output, EventEmitter, Input} from '@angular/core';
import {LinkModel} from "../link/models/link.model";
import {FooterModel} from "./models/footer.model";


@Component({
  selector: 'footer-component',
  templateUrl: './templates/footer.component.html',
  styleUrls: ['./assets/footer.component.css']
})
export class FooterComponent {
  @Output() onModuleClicked: EventEmitter<LinkModel> = new EventEmitter<LinkModel>();
  @Input() setup: FooterModel = null;

  constructor() {
  }


  private onSelectItem(clickedLink: LinkModel): void {
    this.onModuleClicked.emit(clickedLink);
  }
}
