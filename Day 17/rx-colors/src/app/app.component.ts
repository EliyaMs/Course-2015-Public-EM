import { GameService } from 'src/app/services/game-service';
import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isSuccess$!: Observable<boolean>;

  constructor(public GS: GameService){}

  ngOnInit(): void {
    let combinedRgb$ = combineLatest(
      [this.GS.getRed(), this.GS.getGreen(), this.GS.getBlue()])
      .pipe(
        map(rgb => {
          return`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
        }
      )
    )

    this.isSuccess$ = combineLatest(
      [combinedRgb$,
      this.GS.GetComputerColor()]).pipe(
        map(box => {
          return box[0] === 
          `rgb(${box[1][0]}, ${box[1][1]}, ${box[1][2]})`;
        }
      )
    )

  }
  

  setRandomColor(){
    this.GS.RandomizeColor();
  }
  
}
