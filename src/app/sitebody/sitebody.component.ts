import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitebody',
  templateUrl: './sitebody.component.html',
  styleUrls: ['./sitebody.component.css']
})
export class SitebodyComponent implements OnInit {
  @Input() isComponentAppUser = true;
  @Input() isComponentAppTask = false;

  constructor() { }

  ngOnInit(): void {
  }

}
