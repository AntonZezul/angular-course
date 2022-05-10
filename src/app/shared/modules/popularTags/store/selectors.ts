import {createSelector} from '@ngrx/store'
import {PopularTagsStateInterface} from 'src/app/shared/modules/popularTags/types/popularTagsState.interface'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const popularTagsFeatureSelector = (
  state: AppStateInterface
): PopularTagsStateInterface => state.popularTags

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTags: PopularTagsStateInterface) => popularTags.data
)

export const IsLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTags: PopularTagsStateInterface) => popularTags.isLoading
)

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTags: PopularTagsStateInterface) => popularTags.error
)
