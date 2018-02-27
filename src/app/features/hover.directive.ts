import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // use this for only web
    el.nativeElement.style.backgroundColor = 'pink';

    // best approach when developing for multiple enviornment
    renderer.setStyle(el.nativeElement, 'border', '1px solid red');

   }

}
