import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, of, Subscription } from 'rxjs';
import { TodoList } from 'src/app/core/models/todoList.model';
import { DataService } from 'src/app/core/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { wordsCountValidator } from 'src/app/core/validations/general-validators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit, OnDestroy {
  @Output() isExitClickedEvent = new EventEmitter<boolean>(); // to show modalBox

  id$!: Observable<number>
  list$!: Observable<TodoList>;

  listForm!: FormGroup
  FirstListForm: string = '' // to check if form has changed - in close()

  subscription = new Subscription;

  colorList: string[] = [
    'red', 'green', 'blue', 'steelblue', 'magenta', 'brown', 'orange', 'blueviolet', 'salmon'
  ];

  iconList: string[] = [
    '\uf1e3',
    '\uf434',
    '\uf45d',
    '\uf5b0',
    '\uf072',
    '\uf2e7',
    '\uf433',
    '\uf72f',
    '\uf0b1',
    '\uf274',
    '\uf783',
    '\uf017',
    '\uf879',
    '\uf2b5',
    '\uf07a',
    '\uf291',
    '\uf1fd',
    '\uf7da',
    '\uf252',
    '\uf773',
    '\uf6ec'
  ];

  //emptyList to insert if currentId === -1 -> add new list
  emptyList: TodoList = {
    id: -1,
    caption: '',
    description: '',
    image: '',
    color: ''
  }

  currentId: number = 0 // from this.route.params

  isLoaded$!: Observable<boolean>;
  isSaveButtonPressed: boolean = false;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.isLoaded$ = this.data.isLoaded$

    this.id$ = this.route.params.pipe(
      map(prms => {
        this.currentId = +prms['id']
        if (this.currentId < -1 || isNaN(this.currentId)) {
          this.router.navigate(['404']);
        }
        return this.currentId
      })
    )

    this.list$ = this.id$.pipe(
      map(id => {
        if (this.currentId === -1) {
          return of(this.emptyList) // empty list
        } else if (id < 1) {
          this.router.navigate(['404']);
        }
        return this.data.getList(id)
        .pipe(
          catchError((err, caught) => {
            if(err.status)
              this.router.navigate(['404'])
            return EMPTY;
          }))
      }),
      switchMap(list => list)
    )

    this.subscription = this.list$.subscribe(list => {
      this.buildForm()
      this.listForm.reset(list)
      this.FirstListForm = JSON.stringify(this.listForm.value)
    })
  }

  close() {
    if (this.currentId === -1) {
      this.location.back()
    } else {
      this.router.navigate(['lists', this.currentId])
    }
  }

  closeOutside(event: any) {
    var container = document.getElementsByClassName('modal')[0];
    if (container == event.target) { this.close(); }
  }


  buildForm() {
    this.listForm = new FormGroup({
      caption: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      description: new FormControl('', [Validators.required, wordsCountValidator(10), Validators.minLength(30), Validators.maxLength(70)]),
      image: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
    })
  }


  async save() {
    this.isSaveButtonPressed = true
    let list = {
      ...this.listForm.value,
      id: this.currentId,
    };

    if (this.currentId === -1) {
      list.id = 0;
      await this.data.addList(list)
    } else {
      let currentListForm: string = JSON.stringify(this.listForm.value)
      if (this.FirstListForm !== currentListForm) { // check if form is changed
        await this.data.UpdateList(list)
      }
    }
    if (this.currentId === -1) {
      this.router.navigate(['lists'])
    } else {
      this.router.navigate(['lists', this.currentId])
    }
  }


  get(fieldName: string) {
    return this.listForm.get(fieldName);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
