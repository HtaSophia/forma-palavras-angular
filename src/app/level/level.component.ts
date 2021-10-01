import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

    public hints: string[] = [];

    public lettersSelected = [];

    public coins = 0;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly route: Router,
        private readonly levelService: LevelService
    ) {}

    public ngOnInit(): void {
        const level = this.activatedRoute.snapshot.queryParams.id as number;

        this.levels.current = level || 1;
        this.levelInfo = this.levelService.getLevelInfo(this.levels.current);
        this.hints = this.levelInfo.words.map((word) => word.hint);

        this.coins = this.levelService.coinsValue;
    }

    public onLetterClick(letterSelected: string): void {
        if (this.lettersSelected.length <= this.levelInfo.maxLetters) {
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

            this.hints = this.levelInfo.words
                .filter((wd) => !wd.visible && this.hints.includes(wd.hint))
                .map((wd) => wd.hint);

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
                    this.hints = this.levelInfo.words.map((wd) => wd.hint);
                }, 10_000);
            } else if (
                this.levels.wordsCompleted === this.levelInfo.words.length
            ) {
                setTimeout(() => {
                    void this.route.navigate(['menu']);
                }, 5000);
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
