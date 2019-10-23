import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Margherita',
      imageUrl: 'http://www.sfondifree.it/sfondihd/wp-content/uploads/2016/03/Immagine-pizza-margherita-napoletana.jpg',
      ingredients: ['pasta', 'pomodoro', 'mozzarella']
    },
    {
      id: 'r2',
      title: 'Biancaneve',
      imageUrl: 'https://www.unmondodisapori.it/wp-content/uploads/2017/10/pizza-biancaneve.jpg',
      ingredients: ['pasta', 'mozzarella']
    },
    {
      id: 'r3',
      title: 'Diavola',
      imageUrl: 'https://www.agrodolce.it/app/uploads/2014/07/diavola-640x399.jpg',
      ingredients: ['pasta', 'pomodoro', 'mozzarella', 'Salame piccante']
    }
  ];


  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
}

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });

  }
}
