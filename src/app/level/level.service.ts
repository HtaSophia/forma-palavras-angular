import { Injectable } from '@angular/core';
import { LEVELS_INFO } from './utils/levels-info';
import { Level } from './types/level';

@Injectable({
    providedIn: 'root',
})
export class LevelService {
    private levelsInfo = LEVELS_INFO;

    private coins = 0;

    // constructor() { }

    public get coinsValue(): number {
        return this.coins;
    }

    public setCoinsValue(value: number): void {
        this.coins = value;
    }

    public getLevelInfo(level: number): Level {
        return this.levelsInfo[level];
    }
}
