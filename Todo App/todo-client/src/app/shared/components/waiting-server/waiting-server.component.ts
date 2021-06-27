import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-waiting-server',
  templateUrl: './waiting-server.component.html',
  styleUrls: ['./waiting-server.component.css']
})
export class WaitingServerComponent implements OnInit {

  isSserverDown$!: Observable<boolean>;
  isLoaded$!: Observable<boolean>;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.isLoaded$ = this.data.isLoaded$
    this.isSserverDown$ = this.data.isServerDown$
  }

  reload() {
    window.location.reload();
  }

}
