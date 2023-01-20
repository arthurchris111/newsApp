import { Directive } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[hover]',
})

export class hover {
  constructor(private element: ElementRef, renderer: Renderer2) {}

  onMouseOver() {

  }
}
