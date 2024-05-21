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

        @if(disableSubmit) {
            <p>Submit is disabled.</p>
        }

        @for(essential of angularEssentials; track essential) {
            <p>{{essential}}</p>
        }
    `
})
 export class TodoListItem{
    taskTitle = 'Dynamic content property';
    isComplete = false;
    disableSubmit = true;

    angularEssentials = [
        'Components', 'Managing dynamic data', 'Conditionals & Loops',
        'Handling user interaction', 'sharing logic'
    ];

    updateTaskTitle(newTitle: string) {
        this.taskTitle = newTitle;
    }

    completeTask(){
        this.isComplete = true;
    }
}