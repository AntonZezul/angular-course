import {Action, createReducer, on} from '@ngrx/store'
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/updateCurrentUser.action'
import {SettingsStateInterface} from 'src/app/settings/store/types/settingsState.interface'

const initialState: SettingsStateInterface = {
  isSubmiting: false,
  validationErrors: null,
}

const settingsReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmiting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmiting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingsStateInterface => ({
      ...state,
      isSubmiting: false,
      validationErrors: action.errors,
    })
  )
)

export function reducers(state: SettingsStateInterface, action: Action) {
  return settingsReducer(state, action)
}
