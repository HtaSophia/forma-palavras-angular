import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LevelsComponent } from './levels/levels.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { MenuRoutingModule } from './menu-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [MainComponent, LevelsComponent, HowToPlayComponent],
    imports: [CommonModule, MenuRoutingModule, SharedModule],
})
export class MenuModule {}
