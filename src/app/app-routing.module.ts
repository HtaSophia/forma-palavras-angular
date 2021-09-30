import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    {
        path: 'menu',
        loadChildren: async () =>
            (await import('./menu/menu.module')).MenuModule,
    },
    {
        path: 'levels',
        loadChildren: async () =>
            (await import('./level/level.module')).LevelModule,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
