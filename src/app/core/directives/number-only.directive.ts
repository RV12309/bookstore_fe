import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  @Input() disabledNumberOnly = false;

    constructor(readonly elementRef: ElementRef) {
    }

    @HostListener('paste', ['$event']) onPaste(event: any) {
      if (!this.disabledNumberOnly) {
        if (this.allowMetaKey(event)) {
            return;
          }
        const value = event.clipboardData.getData('text');
        if (value.search(/[^0-9]/) >= 0) {
          event.preventDefault();
        }
      }
    }

    @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
      if (!this.disabledNumberOnly) {
        if (this.allowMetaKey(event)) {
            return;
          }
        if (event.key.search(/[^0-9]/) >= 0) {
          event.preventDefault();
        }
      }
    }
    protected allowMetaKey(event: KeyboardEvent): boolean {
        if (
          ['Delete', 'Backspace', 'Tab', 'Escape', 'Enter', 'NumLock', 'ArrowLeft', 'ArrowRight', 'End', 'Home'].indexOf(
            event.key
          ) !== -1 ||
          (event.key === 'a' && (event.ctrlKey || event.metaKey)) ||
          (event.key === 'c' && (event.ctrlKey || event.metaKey)) ||
          (event.key === 'v' && (event.ctrlKey || event.metaKey)) ||
          (event.key === 'x' && (event.ctrlKey || event.metaKey))
        ) {
          return true;
        }
        else return false
      }
  
}
