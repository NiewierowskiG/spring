import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category',
        data: { pageTitle: 'Categories' },
        loadChildren: () => import('./category/category.routes'),
      },
      {
        path: 'comment',
        data: { pageTitle: 'Comments' },
        loadChildren: () => import('./comment/comment.routes'),
      },
      {
        path: 'email',
        data: { pageTitle: 'Emails' },
        loadChildren: () => import('./email/email.routes'),
      },
      {
        path: 'post',
        data: { pageTitle: 'Posts' },
        loadChildren: () => import('./post/post.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
