import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccsClickOutside]',
})
export class CcsClickOutsideDirective implements OnChanges, OnDestroy {

  @Output()
  public ccsClickOutside = new EventEmitter<MouseEvent>();

  @Input()
  public listen: boolean;

  listenerFn: () => void;

  constructor(private _elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnChanges() {
    if (this.listen) {
      setTimeout(() => {
        this.attachListener();
      }, 200);
    } else {
      this.dettachListener();
    }
  }

  ngOnDestroy() {
    this.dettachListener();
  }

  attachListener(): void {
    this.listenerFn = this.renderer.listen('document', 'click', event => {
      if (event.target && !this._elementRef.nativeElement.contains(event.target)) {
        this.ccsClickOutside.emit(event);
      }
    });
  }

  dettachListener(): void {
    if (this.listenerFn) {
      this.listenerFn();
    }
  }

}