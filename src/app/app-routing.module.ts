import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' }, // Effettua il redirect da blank '' a recipes
  {
    path: 'recipes', children: [
    {
    path: '', loadChildren: './recipes/recipes.module#RecipesPageModule' }, // mostra la home recipes con il concetto di children
    // tslint:disable-next-line: max-line-length
    { path: ':recipeId', loadChildren: './recipes/recipes-detail/recipes-detail.module#RecipesDetailPageModule' } // mostra il detail con qualsiasi id passato
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
