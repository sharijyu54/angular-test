import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { TaskFormComponent } from '../task-form/task-form.component'
import { Task } from '../../models/task';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TaskListItemComponent,
    TaskFormComponent,
    NzListModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  constructor() { }

  tasks: Task[] = [
    {title: 'Buy Milk', done: false, deadline: new Date('2021-01-01')},
    {title: 'Go to Work', done: true, deadline: new Date('2020-01-02')},
    {title: 'Visit ankle', done: false, deadline: new Date('2020-01-03')},
  ];

  ngOnInit(): void {
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
