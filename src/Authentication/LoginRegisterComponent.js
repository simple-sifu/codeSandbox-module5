import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/WithPresenter'
import { LoginRegisterPresenter } from './LoginRegisterPresenter'

const LoginRegisterComp = observer((props) => {
  return (
    <>
      <div className="logo">
        <img
          alt="logo"
          style={{ width: 60, filter: 'grayscale(100%)' }}
          src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/1537017/settings_images/1UxqoCceShyczTsmzsLy_logo.png"
        />
      </div>
      <div className="option">
        <input
          style={{ backgroundColor: '#e4257d' }}
          type="submit"
          value="login"
          onClick={() => {
            props.presenter.option = 'login'
          }}
        />
        <input
          style={{ backgroundColor: '#2E91FC' }}
          type="submit"
          value="register"
          onClick={() => {
            props.presenter.option = 'register'
          }}
        />
      </div>
      <div
        className="login-register"
        style={{
          backgroundColor: props.presenter.option === 'login' ? '#E4257D' : '#2E91FC'
        }}
      >
        <form
          className="login"
          onSubmit={(event) => {
            event.preventDefault()
            if (props.presenter.option === 'login') props.presenter.login()
            if (props.presenter.option === 'register') props.presenter.register()
          }}
        >
          <label>
            <input
              type="text"
              value={props.presenter.email}
              placeholder="Email"
              onChange={(event) => {
                props.presenter.email = event.target.value
              }}
            />
          </label>
          <label>
            <input
              type="text"
              value={props.presenter.password}
              placeholder="Password"
              onChange={(event) => {
                props.presenter.password = event.target.value
              }}
            />
          </label>
          {props.presenter.option === 'login' ? (
            <input type="submit" value="login" />
          ) : (
            <input type="submit" value="register" />
          )}
        </form>

        <div className="validation-message">
          {props.presenter.showValidationMessage && props.presenter.validationMessage}
        </div>
      </div>
    </>
  )
})

export const LoginRegisterComponent = withInjection({
  presenter: LoginRegisterPresenter
})(LoginRegisterComp)
