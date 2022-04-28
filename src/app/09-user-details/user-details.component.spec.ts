import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { UserDetailsComponent } from "./user-details.component";
import { Subject } from 'rxjs';

class RouterStub {
    navigate(params) { }
}

class ActivatedRouteStub {
    private subject = new Subject();

    get params() {
        return this.subject.asObservable();
    }

    push(value) {
        this.subject.next(value);
    }
}

describe('UserDetailsComponent', () => {
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserDetailsComponent],
            providers: [
                { provide: Router, useClass: RouterStub},
                { provide: ActivatedRoute, useClass: ActivatedRouteStub}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be create complete', () => {
        expect(component).toBeTruthy();
    });

    it('กดปุ่ม save', () => {
        const router = TestBed.get(Router);
        const spy = spyOn(router, 'navigate');

        component.save();

        expect(spy).toHaveBeenCalledWith(['users']);
    });

    it('เปลี่ยนหน้าถ้าไม่เจอ id หรือ id มั่ว', () => {
        const router = TestBed.get(Router);
        const spy = spyOn(router, 'navigate');

        const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
        route.push({ id: 0 });

        expect(spy).toHaveBeenCalledWith(['not-found']);
    });

    it('อยู่เฉยๆ ไม่ไปไหน', () => {
        const router = TestBed.get(Router);
        const spy = spyOn(router, 'navigate');

        const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
        route.push({ id: 1 });

        expect(spy).not.toHaveBeenCalled;
    });
});