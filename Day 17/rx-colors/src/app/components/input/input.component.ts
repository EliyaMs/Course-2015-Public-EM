import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game-service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  onlyColorRegEx="\\b(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\\b"
  @Input() colorName: string = '';
  
  constructor(
    private GameService: GameService)
    { }

  ngOnInit(): void {
  }
  
  setRed(value: string){
    this.GameService.SetRed(Number(value));
  }
  setGreen(value: string){
    this.GameService.SetGreen(Number(value));
  }
  setBlue(value: string){
    this.GameService.SetBlue(Number(value));
  }

}
