import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public toolbarShadow = false;

    constructor() {
        window.addEventListener('scroll', () => {
            this.toolbarShadow = window.scrollY > 0;
        });

    }

    ngOnInit() {
        // window.location.replace("https://gokid.ro/lets-art-ateliere-de-creatie-arta-si-arhitectura-2019-2020/");
    }
}
