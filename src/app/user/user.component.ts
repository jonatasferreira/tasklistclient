import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<any> = new Array();

  constructor(private userSevice: UserService) { }

  ngOnInit(): void {
    this.userList();
    // this.users = ["Saab", "Volvo", "BMW"];
  }

  userList() {
    this.userSevice.userList().subscribe(users =>{
      this.users = users.data;
    }, err => {
      console.log('Erro ao listar usuários.', err);
    });
  }
}
