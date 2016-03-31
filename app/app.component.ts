import {Component} from 'angular2/core';
import {BoardComponent} from './board/board.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1><trello-board></trello-board>',
    directives: [BoardComponent]
})
export class AppComponent { }