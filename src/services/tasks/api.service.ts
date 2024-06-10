import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TTaskList } from "src/app/tasks-content/tasks-store/state/tasks.state";

@Injectable()

export class ApiService {


    public getTasks(): Observable<TTaskList[]> {

        return of([
            {
                Id: 1,
                Name: 'aboba'
            },
            {
                Id: 2,
                Name: 'aaaaaaa'
            }
        ])
    };

};