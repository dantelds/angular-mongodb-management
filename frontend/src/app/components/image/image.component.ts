import {Component, Input, OnInit} from '@angular/core';
import {ImageModel} from "./models/image.model";


@Component({
  selector: 'image-component',
  templateUrl: './templates/image.component.html',
  styleUrls: ['./assets/image.component.css']
})
export class ImageComponent implements OnInit{
  ngOnInit(): void {
    if(this.setup && !this.setup.src)
    {
      this.setup.src = '/app/components/image/assets/no_image.png'
    }
  }
  @Input() setup: ImageModel = null;
  constructor() {
  }
}
