import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Joke } from 'src/app/models/joke.module';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css']
})
export class JokePageComponent implements OnInit {

  expender$ = new BehaviorSubject<boolean>(false);
  joke$!: Observable<Joke>;

  hasNext$!: Observable<boolean>;
  hasPrev$!: Observable<boolean>;

  params!: [string, number, string];

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    let combinedParams$ = new  Observable<[string, number, string]>();

    combinedParams$ = this.route.params.pipe(
      map(prms => {
        if (String(prms['type']) !== "undefined") {
          this.params = [String(prms['type']), +prms['index'], String(prms['keyword'])]
        } else {
          this.params = [prms['index'], +prms['keyword'], '']
        }
        return this.params
      })
    )


    let index$ = this.route.params.pipe(
      map(prms => +prms['index'] ? +prms['index'] : +prms['keyword'])
    );

    this.hasPrev$ = index$.pipe(
      map(index => index + 1 > 1)
    );

    this.hasNext$ = combinedParams$
      .pipe(
        switchMap(url => {
          if (url[0] === "All")
            return this.data.getJoke(url[2], url[1] + 1)
          else
            return this.data.getJokeByGanerAndIndex(url[2], url[1] + 1, url[0])

        }),
        map(a => !!a)
      )


    this.joke$ = combinedParams$
      .pipe(
        switchMap(url => {
          let res: Promise<Joke>;
          if (url[0] === "All")
            res = this.data.getJoke(url[2], url[1])
          else
            res = this.data.getJokeByGanerAndIndex(url[2], url[1], url[0])

          res.then( // 404
            (data) => {
              if (!data)
                this.router.navigate(['/404']);
            })

          return res;
        })
      )

  }

  show() { // expender
    this.expender$.next(true);
  }

  gotoNext() {
    this.expender$.next(false);
    this.router.navigate(['joke', this.params[0], this.params[1] + 1, this.params[2]]);
  }

  gotoPrev() {
    this.expender$.next(false);
    this.router.navigate(['joke', this.params[0], this.params[1] - 1, this.params[2]]);
  }

}
