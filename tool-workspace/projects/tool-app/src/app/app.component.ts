import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tool-app';

  errorMessage$ = this.store.pipe(select("errorMessage"));

  constructor(private store: Store<{ errorMessage: string}>) { }
}
