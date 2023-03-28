import { injectable, inject } from 'inversify'
import { AuthenticationRepository } from './AuthenticationRepository'
import { Router } from '../Routing/Router'
import { makeObservable, observable } from 'mobx'

@injectable()
export class LoginRegisterPresenter {
  @inject(AuthenticationRepository)
  authenticationRepository

  @inject(Router)
  router

  email = ''

  password = ''

  option = 'login'

  showValidationMessage = false

  validationMessage = ''

  constructor() {
    makeObservable(this, {
      email: observable,
      password: observable,
      option: observable,
      showValidationMessage: observable,
      validationMessage: observable
    })
  }

  register = async () => {
    const registerResponse = await this.authenticationRepository.register({
      email: this.email,
      password: this.password
    })
    this.showValidationMessage = false
    if (registerResponse.success) {
      this.router.goToId('loginLink')
    } else {
      this.validationMessage = registerResponse.message
      this.showValidationMessage = true
    }
  }

  login = async () => {
    this.showValidationMessage = false
    const loginResponse = await this.authenticationRepository.login({
      email: this.email,
      password: this.password
    })

    if (loginResponse.success) {
      this.router.goToId('homeLink')
    } else {
      this.validationMessage = loginResponse.message
      this.showValidationMessage = true
    }
  }
}
