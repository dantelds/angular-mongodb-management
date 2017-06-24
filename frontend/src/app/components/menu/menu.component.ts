import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {TranslateService} from '../../services/language.service';
import {LinkModel} from "../link/models/link.model";
declare var $: any;


@Component({
  selector: 'menu-component',
  templateUrl: './templates/menu.component.html',
  styleUrls: ['./assets/menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onModuleClicked: EventEmitter<LinkModel> = new EventEmitter<LinkModel>();
  @Input() links: LinkModel[] = null;
  @Input() activeLink: LinkModel = null;

  constructor(private _translate: TranslateService) {
  }

  ngOnInit(): void {
    if(!this.activeLink && this.links){
      this.activeLink = this.links[0];
    }
  }

  private onSelectItem(clickedLink: LinkModel): void {
    $('.navbar-collapse').collapse("hide");
    this.activeLink = clickedLink;
    this.onModuleClicked.emit(clickedLink);
  }
}
