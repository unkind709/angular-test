import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { TodoService } from './todo.service';

describe('TestService', () => {
    let injector: TestBed;
    let service: TodoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TodoService]
        });

        injector = getTestBed();
        service = injector.get(TodoService);
        httpMock = injector.get(HttpTestingController);
    });

    it('เรียก getTodos()', (done) => {
        const todos = [1, 2, 3, 4, 5]; 

        service.getTodos().subscribe(res => {
            expect(res).toBe(todos);
            done();
        });

        const req = httpMock.expectOne('gettodos');
        expect(req.request.method).toBe('GET');
        req.flush(todos)
    });
});