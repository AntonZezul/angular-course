import {createSelector} from '@ngrx/store'
import {FeedStateInterface} from 'src/app/shared/modules/feed/types/feedState.interface'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const feedFeatureSelector = (
  state: AppStateInterface
): FeedStateInterface => state.feed

export const feedDataSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
)

export const feedIsLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
)

export const feedErrorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
)
