import {createSelector} from '@ngrx/store'
import {ArticleStateInterface} from 'src/app/article/types/articleState.interface'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const articleFeatureSelector = (
  state: AppStateInterface
): ArticleStateInterface => state.article

export const articleDataSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
)

export const articleIsLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
)

export const articleErrorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
)
