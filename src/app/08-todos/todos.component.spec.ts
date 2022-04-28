import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { from } from 'rxjs';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';


describe('TodosComponent', () => {
    let component: TodosComponent;
    let fixture: ComponentFixture<TodosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [TodosComponent],
            providers: [TodoService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodosComponent);
        component = fixture.componentInstance;
    });

    it('should create component complete', () => {
        expect(component).toBeTruthy();
    });


    it('should load todos from the server', () => {
        const service = TestBed.get(TodoService);
        const todos = [1, 2, 3, 4, 5];
        spyOn(service, 'getTodos').and.returnValue(from([todos]));

        fixture.detectChanges();
        
        expect(component.todos.length).toBe(5);
    });
}); 