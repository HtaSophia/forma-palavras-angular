import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-hint',
    templateUrl: './hint.component.html',
    styleUrls: ['./hint.component.scss'],
})
export class HintComponent implements OnInit {
    @Input()
    public hints: string[];

    @Input()
    public coins: number;

    @Output()
    public hintEvent = new EventEmitter<void>();

    public hint: string;

    public ngOnInit(): void {}

    public onHintClick(): void {
        if (this.coins >= 5) {
            const index = Math.floor(Math.random() * this.hints.length);

            this.hint = this.hints[index];
            this.hints.splice(index, 1);

            this.hintEvent.emit();
        }
    }
}
