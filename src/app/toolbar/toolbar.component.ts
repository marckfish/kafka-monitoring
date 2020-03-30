import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls : ['toolbar.css']
})
export class ToolbarComponent implements OnInit {

    title = 'kafka';

    constructor() {
    }

    ngOnInit(): void {
    }
}
