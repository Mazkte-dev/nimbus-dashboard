import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Task} from '../../shared/models/task.model'
import {TaskCardComponent} from "../../shared/components/task-card/task-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CdkDropList,
    TaskCardComponent,
    CdkDrag,
    NgForOf
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  todo: Task[] = [
    { id: 1, title: 'Task 1', description: 'Implement feature X', status: 'todo' },
    { id: 2, title: 'Task 2', description: 'Fix bug Y', status: 'todo' }
  ];

  inProgress: Task[] = [
    { id: 3, title: 'Task 3', description: 'Design UI for Z', status: 'in-progress' }
  ];

  done: Task[] = [
    { id: 4, title: 'Task 4', description: 'Write unit tests', status: 'done' }
  ];

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


}
