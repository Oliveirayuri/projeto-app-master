import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path: '', redirectTo: 'home',pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
 
  { path: 'jogo', loadChildren: './jogo/jogo.module#JogoPageModule' },
  { path: 'jogo', loadChildren: './jogo/jogo.module#JogoPageModule' },
  { path: 'jogodetails', loadChildren: './jogo-details/jogodetails.module#JogoDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
