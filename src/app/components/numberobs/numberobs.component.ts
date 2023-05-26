import { Component } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { map, startWith, scan } from 'rxjs/operators';

@Component({
    selector: 'number-obs',
    templateUrl: './numberobs.component.html',
    styleUrls: ['./numberobs.component.scss'],
})
export class NumberObsComponent {
    incrementClick$ = fromEvent(
        document /*.getElementById("#increment") as HTMLButtonElement*/,
        'click'
    ).pipe(
        map((event) => +1),
        scan((acc, incr) => acc + incr)
    );
    numToDisplay: number;

    constructor() {
        this.numToDisplay = 0;
        this.incrementClick$.subscribe((value) => (this.numToDisplay = value));
        console.log(document.getElementById('increment') as HTMLElement);
    }
}
