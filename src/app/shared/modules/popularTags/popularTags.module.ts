import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {PopularTagsService} from 'src/app/shared/modules/popularTags/services/popularTags.service'
import {GetPopularTagsEffect} from 'src/app/shared/modules/popularTags/store/effects/getPopularTags.effect'
import {reducers} from 'src/app/shared/modules/popularTags/store/reducers'
import {PopularTagsComponent} from './components/popularTags/popularTags.component'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
