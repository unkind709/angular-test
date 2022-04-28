import { from, empty, throwError } from 'rxjs';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

describe('TodosComponent', () => {
    let component: TodosComponent;
    let service: TodoService;

    beforeEach(() => {
        service = new TodoService(null);
        component = new TodosComponent(service);
    });

    it('เช็คว่าเรียก getTodos ไหม', () => {
        const todos = [1, 2, 3, 4, 5];
        spyOn(service, 'getTodos').and.callFake(() => {
            return from([todos]);
        });

        component.ngOnInit();

        expect(component.todos).toBe(todos);
    });

    it('เช็คเรียก add', () => {
        const spy = spyOn(service, 'add').and.callFake(t => {
            return empty();
        });

        component.add();

        expect(spy).toHaveBeenCalled();
    });

    it('เช็คเรียก add ขา next', () => {
        const todo = 6;
        
        spyOn(service, 'add').and.returnValue(from([todo]));

        component.add();

        expect(component.todos.indexOf(todo)).not.toBe(-1);
    });

    it('เช็คเรียก add ขา error', () => {
        const error = 'error ja';
        
        spyOn(service, 'add').and.returnValue(throwError(error));

        component.add();

        expect(component.message).toBe(error);
    });


    it('เช็คเรียก delete', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const spy = spyOn(service, 'delete').and.callFake(t => {
            return empty();
        });

        component.delete(1);

        expect(spy).toHaveBeenCalled();
    });

    it('เช็คเรียก delete', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        const spy = spyOn(service, 'delete').and.returnValue(empty());

        component.delete(1);

        expect(spy).not.toHaveBeenCalled();
    });
});