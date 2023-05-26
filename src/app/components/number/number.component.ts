import { Component } from '@angular/core';

@Component({
    selector: 'number-to-increment',
    templateUrl: './number.component.html',
    styleUrls: ['./number.component.scss']
})
export class NumberComponent {
    public num: number;
    
    constructor() {
        this.num = 0;
    }

    increment() {
        this.num++;
    }

}