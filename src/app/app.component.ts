import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   //   Must be unique tag
  // selector: '[app-root]',   // can select by attribute e.g [app-root] 
  // selector: '.app-root', // Selectin by class

  templateUrl: './app.component.html',

  // styleUrls: ['./app.component.css'] // inline or external file
  styles: [
    `
    h3{
      color: blue;
    }
    `
  ] // External
  
})
export class AppComponent {
  name = 'Andrew';
}
