import { injectable, inject } from 'inversify'
import { makeObservable, action } from 'mobx'
import { Types } from '../Core/Types'
import { Router } from '../Routing/Router'

@injectable()
export class AuthenticationRepository {
  @inject(Router)
  router

  @inject(Types.IDataGateway)
  dataGateway

  constructor() {}

  logout = async () => {
    this.router.goToId('loginLink')
  }

  register = async (programmersModel) => {
    let dto = {
      email: programmersModel.email,
      password: programmersModel.password
    }
    const response = await this.dataGateway.post(`register`, dto)
    return {
      success: response.success,
      message: response.result.message
    }
  }

  login = async (programmersModel) => {
    let dto = {
      email: programmersModel.email,
      password: programmersModel.password
    }
    const response = await this.dataGateway.post(`login`, dto)
    return {
      success: response.success,
      message: response.result.message
    }
  }
}
