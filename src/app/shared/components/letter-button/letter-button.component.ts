import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-letter-button',
    templateUrl: './letter-button.component.html',
    styleUrls: ['./letter-button.component.scss'],
})
export class LetterButtonComponent implements OnInit {
    @Input()
    public label: string;

    @Input()
    public clickable = true;

    @Output()
    public onButtonClick = new EventEmitter<string>();

    public backgroundColor: string;

    public ngOnInit(): void {
        this.backgroundColor = `rgb(${Math.floor(
            Math.random() * 200
        )},${Math.floor(Math.random() * 200)},${Math.floor(
            Math.random() * 200
        )})`;
    }

    public onClick(): void {
        this.onButtonClick.emit(this.label);
    }
}
