import { Component, inject } from '@angular/core';
import { ArticleModel } from '../../models/article.model';
import { FormsModule } from '@angular/forms';
import { ConfirmBoxComponent } from '../../components/confirm-box/confirm-box.component';
import { CommonModule } from '@angular/common';
import { ListCourseService } from '../../services/list-course.service';

@Component({
  selector: 'app-correction',
  imports: [FormsModule, ConfirmBoxComponent, CommonModule],
  templateUrl: './correction.component.html',
  styleUrl: './correction.component.scss',
})
export class CorrectionComponent {
  articleName: string | null = null;
  articleIsImportant: boolean = false;
  //list: ArticleModel[] = [];
  listCourseService = inject(ListCourseService);

  add() {
    if (!this.articleName?.trim()) return;

   this.listCourseService.add({
      name: this.articleName.trim(),
      isImportant: this.articleIsImportant,
    });
    // this.list.push({
    //   name: this.articleName.trim(),
    //   isImportant: this.articleIsImportant
    // })
    this.articleName = null;
    this.articleIsImportant = false;
  }

  delete(response: boolean, item: ArticleModel) {
    if (response) {
      // this.list = this.list.filter(i => i !== item);
      this.listCourseService.delete(item);
    }
  }
}
