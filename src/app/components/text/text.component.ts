import { Component } from '@angular/core';

@Component({
    selector: 'text-to-magnify',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss']
})
export class TextComponent {
    text: string = 'I become bigger and bigger';

    magnify() {
        const title = document.querySelector("#title") as HTMLElement;
        if (title != null) {
            console.log("title: ", title);
            const sizeStr : string = window.getComputedStyle(title).getPropertyValue('font-size');
            let sizeFlt = parseFloat(sizeStr);
            console.log("sizeFlt:", sizeFlt);
            
            title.style.fontSize = ++sizeFlt + "px";
            
            //title.style.fontSize = "100px"
            console.log("title font after: ", title.style.fontSize)
        }
        
    }
}