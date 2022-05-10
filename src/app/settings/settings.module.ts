import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {reducers} from 'src/app/settings/store/reducers'
import {BackendErrorMessagesModule} from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module'
import {SettingsComponent} from './components/settings/settings.component'

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    BackendErrorMessagesModule,
    ReactiveFormsModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
