import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <p>
      status works!
    </p>
  `,
  styles: [
    "h4{color:green}"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}