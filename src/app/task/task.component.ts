import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Array<any> = new Array();

  constructor(private taskSevice: TaskService) { }

  ngOnInit(): void {
    this.taskList();
  }

  taskList() {
    this.taskSevice.taskList().subscribe(tasks =>{
      this.tasks = tasks.data;
    }, err => {
      console.log('Erro ao listar usuários.', err);
    });
  }

}
