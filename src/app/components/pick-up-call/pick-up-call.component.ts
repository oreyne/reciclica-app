import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pick-up-call',
  templateUrl: './pick-up-call.component.html',
  styleUrls: ['./pick-up-call.component.scss'],
})
export class PickUpCallComponent implements OnInit {

  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;

  @Input() status: string;
  @Input() updateAt: string;
  @Input() createdAt: string;
  @Input() notes: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {}

}
