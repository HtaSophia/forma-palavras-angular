import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-levels',
    templateUrl: './levels.component.html',
    styleUrls: ['./levels.component.scss'],
})
export class LevelsComponent {
    public options = ['1', '2', '3', '4', '5'];

    constructor(private readonly route: Router) {}

    public onLevelClick(level: string): void {
        void this.route.navigate(['levels'], { queryParams: { id: +level } });
    }
}
