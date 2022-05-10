import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export interface SettingsStateInterface {
  isSubmiting: boolean
  validationErrors: BackendErrorsInterface | null
}
