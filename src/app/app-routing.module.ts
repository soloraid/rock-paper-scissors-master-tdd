import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardGameComponent} from './components/board-game/board-game.component';

const routes: Routes = [
    {path: 'board-game', component: BoardGameComponent},
    {path: '**', redirectTo: 'board-game'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
