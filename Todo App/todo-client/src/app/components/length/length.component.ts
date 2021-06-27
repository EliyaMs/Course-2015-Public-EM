import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {

  @Input() length = -1;
  @Input() icon = '';
  @Input() label = '';

  constructor() { }

  ngOnInit(): void {
  }

}
