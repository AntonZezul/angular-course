import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {AuthService} from 'src/app/auth/services/auth.service'
import {registerAction} from 'src/app/auth/store/actions/register.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/selectors'
import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'ac-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmiting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    })
  }

  initializeValues(): void {
    this.isSubmiting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }
}
