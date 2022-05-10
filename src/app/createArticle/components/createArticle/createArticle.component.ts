import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {createArticleAction} from 'src/app/createArticle/store/actions/createArticle.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/createArticle/store/selectors'
import {ArticleInputInterface} from 'src/app/shared/types/articleInput.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'ac-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  isSubmiting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmiting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
