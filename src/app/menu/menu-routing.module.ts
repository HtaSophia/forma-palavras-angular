import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LevelsComponent } from './levels/levels.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    {
        path: 'levels',
        component: LevelsComponent,
    },
    {
        path: 'how-to-play',
        component: HowToPlayComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenuRoutingModule {}
