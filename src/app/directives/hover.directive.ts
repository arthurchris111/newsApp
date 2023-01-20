import { Directive } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[hover]',
})
export class hover {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(1.1)');
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'transform 0.2s');
    // this.renderer.setStyle(this.element.nativeElement, '', '');
  }


}
