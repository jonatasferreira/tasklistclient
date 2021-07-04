import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasklistclient';
  @Output() isComponentAppUser = true;

  setDisplay(newItem: boolean) {
    this.isComponentAppUser = !this.isComponentAppUser;
  }
}
