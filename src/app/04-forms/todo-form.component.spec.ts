import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
    let component: TodoFormComponent;

    beforeEach(() => {
        component = new TodoFormComponent(new FormBuilder());
    });

    it('สร้าง form ได้สำเร็จจ้า', () => {
        expect(component.form.contains('name')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    });

    it('เช็ค name require 1', () => {
        const name = component.form.get('name');
        name.setValue('');
        expect(name.valid).toBeFalsy();
    });

    it('เช็ค name require 2', () => {
        const name = component.form.get('name');
        name.setValue('ddd');
        expect(name.valid).toBeTruthy();
    });
})