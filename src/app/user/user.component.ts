import { Component, OnInit, Input } from '@angular/core';
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
  alert: boolean = false;
  alertSuccess: string = "success";
  alertMsg: string = "";


  constructor(private userSevice: UserService) { }

  ngOnInit(): void {
    this.userList();
  }

  closeAlert() {
    this.alert = false;
  }
  openAlert(msg: string, success: boolean) {
    this.alert = true;
    this.alertMsg = msg;
    if (success) this.alertSuccess = "success";
    else this.alertSuccess = "danger";
  }

  userList() {
    this.userSevice.userList().subscribe(users =>{
      this.users = users.data;
    }, err => {
      this.openAlert(err.error.erro, false);
      console.log('Erro ao listar usuários.', err);
    });
  }

  insert() {
    this.userSevice.insert(this.user).subscribe(user => {
      this.openAlert(user.sucesso, true);
      this.user = new UserModel();
      this.userList();
    }, err => {
      this.openAlert(err.error.erro, false);
      console.log('erro ao cadastrar usuário', err);
    });
  }

  update(id: number) {
    this.userSevice.update(id, this.user).subscribe(user => {
      this.openAlert(user.sucesso, true);
      this.user = new UserModel();
      this.userList();
    }, err => {
      this.openAlert(err.error.erro, false);
      console.log('erro ao atualizar usuário', err);
    });
  }

  delete(id: number) {
    this.userSevice.delete(id).subscribe(msg => {
      this.openAlert('Operação relizada com sucesso.', true);
      this.user = new UserModel();
      this.userList();
    }, err => {
      this.openAlert(err.error.erro, false);
      console.log('erro ao deletar usuário', err);
    });
  }
}
