import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LevelService } from './level.service';
import { Level } from './types/level';

@Component({
    selector: 'app-level',
    templateUrl: './level.component.html',
    styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
    public levels = {
        current: 1,
        wordsCompleted: 0,
        total: 5,
    };

    public levelInfo: Level;

    public lettersSelected = [];

    public coins = 0;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly levelService: LevelService
    ) {}

    public ngOnInit(): void {
        const level = this.route.snapshot.queryParams.id as number;
        this.levelInfo = this.levelService.getLevelInfo(level || 1);

        this.coins = this.levelService.coinsValue;
    }

    public onLetterClick(letterSelected: string): void {
        if (this.lettersSelected.length < this.levelInfo.maxLetters) {
            this.lettersSelected.push(letterSelected);
            this.checkWord(this.lettersSelected.join(''));
        }
    }

    public checkWord(word: string): void {
        const wordCompleted = this.levelInfo.words.find(
            (wd) => wd.value === word
        );

        if (wordCompleted) {
            this.coins += this.lettersSelected.length;
            this.levelService.setCoinsValue(this.coins);

            this.lettersSelected = [];
            wordCompleted.visible = true;
            this.levels.wordsCompleted++;

            if (
                this.levels.wordsCompleted === this.levelInfo.words.length &&
                this.levels.current < this.levels.total
            ) {
                this.levels.current++;

                setTimeout(() => {
                    this.levels.wordsCompleted = 0;
                    this.levelInfo = this.levelService.getLevelInfo(
                        this.levels.current
                    );
                }, 10_000);
            }
        }
    }

    public onResetClick(): void {
        this.lettersSelected = [];
    }

    public onHintClick(): void {
        this.coins -= 5;
        this.levelService.setCoinsValue(this.coins);
    }
}
