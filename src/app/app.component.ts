import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-left-navigation></app-left-navigation>
    <app-right-navigation></app-right-navigation>
    <app-header></app-header>
    <app-footer></app-footer>
  `,
})
export class AppComponent {

}
