import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public maze: Array<number> = [];

    constructor(){

    }

    public ngOnInit(): void {
        for(let i = 0; i < 100; i++){
            this.maze.push(i);
        }
    }
}
