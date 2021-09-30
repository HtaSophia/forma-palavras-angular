import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit {
    @Input()
    public word: string;

    @Input()
    public visible = false;

    public wordSplit: string[];

    public ngOnInit(): void {
        this.wordSplit = this.word.split('');
    }
}
