import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {CreateArticleService} from 'src/app/createArticle/services/createArticle.service'
import {CreateArticleEffect} from 'src/app/createArticle/store/effects/createArticle.effect'
import {reducers} from 'src/app/createArticle/store/reducers'
import {ArticleFormModule} from 'src/app/shared/modules/articleForm/articleForm.module'

import {CreateArticleComponent} from './components/createArticle/createArticle.component'

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
