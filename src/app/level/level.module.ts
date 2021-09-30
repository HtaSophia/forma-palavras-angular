import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelRoutingModule } from './level-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LevelComponent } from './level.component';
import { WordComponent } from './word/word.component';
import { HintComponent } from './hint/hint.component';

@NgModule({
    declarations: [LevelComponent, WordComponent, HintComponent],
    imports: [CommonModule, LevelRoutingModule, SharedModule],
})
export class LevelModule {}
