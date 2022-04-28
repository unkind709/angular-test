import { Directive, OnChanges, Input, ElementRef } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
    defaultColor = 'black';
    @Input('appHighlight') bgColor: string;

    constructor(private el: ElementRef) {
    }

    ngOnChanges(): void {
        this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
    }
}