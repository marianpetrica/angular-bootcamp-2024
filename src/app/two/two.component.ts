import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-two',
    templateUrl: './two.component.html',
    styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {

    @Input() name: string | null = null;

    @Output() messageEmitter: EventEmitter<string> = new EventEmitter();


    constructor() {
        /*this does not work, the operation must be done onInit
        const concatName = this.name + "a";

        console.log(concatName)*/
    }

    ngOnInit(): void {
        const concatName = this.name + "a";

        console.log(concatName)
    }

    sendMessageToOne() {
        this.messageEmitter.emit("Hello from Two!");
    }
}
