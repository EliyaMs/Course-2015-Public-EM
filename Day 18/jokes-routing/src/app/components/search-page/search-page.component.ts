import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  ganers$!: Promise<string[]>;

  constructor(
    public data: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ganers$ = this.data.getAllJokeGaner();
  }

  search(value: string, ganer: string) {    
    this.router.navigate(['joke', ganer, 0, value]);
  }

}
