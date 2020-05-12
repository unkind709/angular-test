import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map(res => res as any));
  }

  getTodos() {
    return this.http.get('...').pipe(map(res => res as any));
  }

  getTodosPromise() {
    return this.http.get('...').pipe(map(res => res as any)).toPromise();
  }

  delete(id) {
    return this.http.delete('...').pipe(map(res => res as any));
  }
}
