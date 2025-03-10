import { Injectable, signal } from '@angular/core';
import { ArticleModel } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ListCourseService {
  // utilisation d'un signal pour traquer notre list
  list = signal<ArticleModel[]>([]);

  constructor() {
    // setInterval(() => {
      // this.list.push({
      //   name: 'test',
      //   isImportant: true,

      //remplacer complètement les valeurs du signal
      //this.list.set([]);

      // mettre à jour les valeurs en se servant des anciennes valeurs
      this.list.update((old) => [...old, { name: 'test', isImportant: true }]);
      console.log(this.list());
    // }, 1000);
  }

  add(article: ArticleModel) {
    //modifier complètement :
    // list.set(/*nouvelle liste*/ [])

    // modifier en focntion des anciennes valeurs
    this.list.update((old) => [...old, article]);
  }

  delete(article: ArticleModel) {
    this.list.update((old) => old.filter(a => a !== article));
  }

  clear(){
    this.list.set([]);
  }
}
