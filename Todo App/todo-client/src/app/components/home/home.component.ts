import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { combineLatest, Observable } from 'rxjs';
import { TodoList } from 'src/app/core/models/todoList.model';
import { TodoItem } from 'src/app/core/models/todoItem.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  all$!: Observable<[TodoList[], TodoItem[], TodoItem[]]>

  isLoaded$!: Observable<boolean>;

  isLoadinCompleted!: boolean;

  date = new Date();
  name = 'Eliya Mashash';

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoaded$ = this.data.isLoaded$

    this.all$ = combineLatest([
      this.data.lists$,
      this.data.items$,
      this.data.getActiveItems(),
    ])
  }

  createNewList() {
    this.router.navigate(['lists', -1, 'edit'])
  }

  ViewAllList() {
    this.router.navigate(['lists'])
  }

  ViewAllItems() {
    this.router.navigate(['items'])
  }

}
