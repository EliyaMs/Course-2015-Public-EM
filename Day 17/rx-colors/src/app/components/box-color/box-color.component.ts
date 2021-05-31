import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-color',
  templateUrl: './box-color.component.html',
  styleUrls: ['./box-color.component.css']
})
export class BoxColorComponent implements OnInit {
  @Input() name: string = '';
  @Input() color: string = '';

  constructor() { }

  ngOnInit(): void { }

}
