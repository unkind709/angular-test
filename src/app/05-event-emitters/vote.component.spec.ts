import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });

    it('ส่งค่า voteChanged เมื่อมีการกด upVote', (done) => {
        let totalVotes;

        component.voteChanged.subscribe(tv => {
            totalVotes = tv;
            expect(totalVotes).toBe(1);
            done();
        });

        component.upVote();

        // expect(component.voteChanged).toBe(1);
    });
})