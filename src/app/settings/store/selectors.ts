import {createSelector} from '@ngrx/store'

import {SettingsStateInterface} from 'src/app/settings/store/types/settingsState.interface'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const settingsFeatureSelector = (
  state: AppStateInterface
): SettingsStateInterface => state.settings

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmiting
)

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
)
