import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';

@Directive({
  selector: '[appNonSpace]',
  providers: [NgModel]
})
export class NonSpaceDirective {
  constructor(readonly elementRef: ElementRef, readonly injector?: Injector, readonly control?: NgModel) {}

    @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
        if (event.key && (event.key.search(/\s/) >= 0 || event.key === 'Spacebar')) {
            event.preventDefault();
        }
    }
    @HostListener('paste', ['$event']) onPaste(event?: ClipboardEvent) {
        setTimeout(() => {
            let data = this.elementRef.nativeElement.value;
            if (data && typeof data === 'string') {
                data = data.replace(/\s/gi, '');
                this.elementRef.nativeElement.value = data;
                this.onModelChange(this.elementRef.nativeElement.value);
            }
        });
    }
    protected onModelChange: (value: any) => void = () => {
        if (this.control) {
            this.control.control.setValue(this.elementRef.nativeElement.value);
        }

        if (!this.injector) {
            return;
        }

        const control = this.injector.get(NgControl);
        const model = this.injector.get(NgModel);

        if (control) {
            control.control?.setValue(this.elementRef.nativeElement.value);
        }
        if (model) {
            model.control.setValue(this.elementRef.nativeElement.value);
        }
    };

}
