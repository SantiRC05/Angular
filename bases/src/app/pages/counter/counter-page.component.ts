import { Component } from "@angular/core";



@Component({
  templateUrl: `./counter-page.component.html`,

styles: `
  button {
    padding: 5px;
    margin: 10px;
    width: 75px;
  }
`

})
export class CounterComponent {

  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  resetcounter() {
    this.counter = 0;
  }
}
