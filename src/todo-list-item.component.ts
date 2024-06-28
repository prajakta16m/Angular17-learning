/**
 * Understanding state management of data in component.
 */
import { Component, EventEmitter, Input, Output } from "@angular/core"

@Component({
    selector: 'app-todo-list-item',
    standalone: true,
    template: `
        <p>Title: {{taskTitle}}</p>
        <button [disabled]='disableSubmit' (click)="onSubmit()">Submit</button>

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
    disableSubmit = false;

    @Input() cartCount: any;
    @Output() signalUpdate = new EventEmitter<number>();

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


    onSubmit(){
        //alert("done");
        this.signalUpdate.emit(10);
    };
}