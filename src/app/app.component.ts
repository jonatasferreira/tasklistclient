import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasklistclient';
  @Output() isComponentAppUser = true;
  @Output() isComponentAppTask = false;

  setDisplayUserComp(newItem: boolean) {
    this.isComponentAppUser = true;
    this.isComponentAppTask = false;
  }
  
  setDisplayTaskComp(newItem: boolean) {
    this.isComponentAppUser = false;
    this.isComponentAppTask = true;
  }
}
