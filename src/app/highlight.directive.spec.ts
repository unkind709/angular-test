import { Component } from "@angular/core";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HighlightDirective } from './highlight.directive';

@Component({
    template: `
        <div appHighlight="white">bgWhite</div>
        <div appHighlight>defaultColor</div>
    `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
    let component: DirectiveHostComponent;
    let fixture: ComponentFixture<DirectiveHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DirectiveHostComponent,
                HighlightDirective
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should highlight white color when input with white', () => {
        const ne = fixture.nativeElement.querySelectorAll('div')[0];
        const bgColor = ne.style.backgroundColor;

        expect(bgColor).toBe('white');
    });

    it('should highlight default color when input null', () => {
        const de = fixture.debugElement.queryAll(By.css('div'))[1];
        const bgColor = de.nativeElement.style.backgroundColor;

        const directiveColor = de.injector.get(HighlightDirective);

        expect(bgColor).toBe(directiveColor.defaultColor);
    });
})

