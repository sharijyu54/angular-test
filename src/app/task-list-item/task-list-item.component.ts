import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list-item',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.scss'
})
export class TaskListItemComponent implements OnInit {
  constructor() { }

  @Input() task: Task;

  ngOnInit(): void {
  }

  isOverdue(task: Task) {
    return !task.done && task.deadline && task.deadline.getTime() < (new Date()).setHours(0, 0, 0, 0);
  }
}
