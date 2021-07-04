import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() isDisplayComponentAppUser = new EventEmitter<boolean>();
  @Output() isDisplayComponentAppTask = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  userView() {
    console.log('userView()');
  }

  taskView() {

  }

  setDisplayComponentAppUser() {
    this.isDisplayComponentAppUser.emit(true);
  }

  setDisplayComponentAppTask() {
    this.isDisplayComponentAppTask.emit(true);
  }
}
