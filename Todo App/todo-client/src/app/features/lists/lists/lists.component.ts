import { combineLatest, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TodoList } from 'src/app/core/models/todoList.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit{

  lists$!: Observable<TodoList[]>;
  completedLists$ = new Observable<number[]>();

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lists$ = this.data.lists$
    
    this.completedLists$ = combineLatest([
      this.data.getActiveItems(),
      this.lists$
    ]).pipe(
      map(all => {
        let actives = all[0]
          .map(item => item.listId)
          .filter((item, i, ar) => ar.indexOf(item) === i)

        return all[1]
          .filter(list => actives.includes(list.id))
          .map(list => list.id)
      })
    )

  }

  goToList(id: number){
    this.router.navigate(['lists', id])
  }

  addList(){
    this.router.navigate(['lists', -1 , 'edit']) 
  }

}
