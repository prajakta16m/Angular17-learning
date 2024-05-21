/**
 * Understanding state management of data in component.
 */
import { Component } from "@angular/core"

@Component({
    selector: 'app-todo-list-item',
    standalone: true,
    template: `
        <p>Title: {{taskTitle}}</p>
        <button [disabled]='disableSubmit'>Submit</button>
    `
})
 export class TodoListItem{
    taskTitle = 'Dynamic content property';
    isComplete = false;
    disableSubmit = true;

    updateTaskTitle(newTitle: string) {
        this.taskTitle = newTitle;
    }

    completeTask(){
        this.isComplete = true;
    }
}