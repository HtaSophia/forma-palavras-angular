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
        this.backgroundColor = `#${Math.floor(
            Math.random() * 16_777_215
        ).toString(16)}`;
    }

    public onClick(): void {
        this.onButtonClick.emit(this.label);
    }
}
