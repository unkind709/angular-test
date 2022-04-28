import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('VoterComponent', () => {
    let component: VoterComponent;
    let fixture: ComponentFixture<VoterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [VoterComponent]
        });

        fixture = TestBed.createComponent(VoterComponent);
        component = fixture.componentInstance;
    });

    it('เช็ค total votes', () => {
        component.othersVote = 100;
        component.myVote = 1;
        fixture.detectChanges();

        const de = fixture.debugElement.query(By.css('.vote-count')); 
        const el: HTMLElement = de.nativeElement;

        // const totalVotes = fixture.nativeElement.querySelector('.vote-count');

        expect(el.textContent).toContain('101');
    });

    it('up vote', () => {
        component.myVote = 1;
        component.upVote();
        fixture.detectChanges();

        const de = fixture.debugElement.query(By.css('.glyphicon.glyphicon-menu-up'));

        expect(de.classes.highlighted).toBeTruthy();
    });

    it('up vote when click button', () => {
        const button = fixture.debugElement.query(By.css('.glyphicon.glyphicon-menu-up'));
        button.triggerEventHandler('click', null); //component.upVote();

        expect(component.myVote).toBe(1);
        expect(component.totalVotes).toBe(1);
    });

    it('upvote', () => {
        component.upVote();

        expect(component.myVote).toEqual(1);
    })
});