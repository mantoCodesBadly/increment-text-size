import { Component } from '@angular/core';

@Component({
    selector: 'number-obs',
    templateUrl: './numberobs.component.html',
    styleUrls: ['./numberobs.component.scss']
})
export class NumberObsComponent {
    num: number;

    constructor() {
        this.num = 0;
    }
    
}