import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.page.html',
  styleUrls: ['./customize.page.scss'],
})
export class CustomizePage {


  constructor(private renderer: Renderer2) { }

  PurpleTheme() {
    this.renderer.setAttribute(document.body, 'color-theme', 'purple')
  }

  TealTheme() {
    this.renderer.setAttribute(document.body, 'color-theme', 'teal')
  }

  FuschiaTheme() {
    this.renderer.setAttribute(document.body, 'color-theme', 'fuschia')
  }
}
