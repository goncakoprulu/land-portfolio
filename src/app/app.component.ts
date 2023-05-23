import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'land';

  constructor(
    private router: Router
  ) {}

  todesignProjects(){
    this.router.navigate(['/design-projects'])
  }
}


