import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserModel = new UserModel();
  users: Array<any> = new Array();

  constructor(private userSevice: UserService) { }

  ngOnInit(): void {
    this.userList();
  }

  userList() {
    this.userSevice.userList().subscribe(users =>{
      this.users = users.data;
    }, err => {
      console.log('Erro ao listar usuários.', err);
    });
  }

  insert() {
    this.userSevice.insert(this.user).subscribe(user => {
      this.user = new UserModel();
      this.userList();
    }, err => {
      console.log('erro ao cadastrar usuário', err);
    });
  }

  update(id: number) {
    
  }

  delete(id: number) {

  }
}
