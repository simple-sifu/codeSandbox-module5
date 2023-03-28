import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../../Core/WithPresenter'
import { NavigationPresenter } from '../NavigationPresenter'

export const NavigationBackToTopComp = observer((props) => {
  return (
    <>
      <div
        className="navigation-item"
        style={{ backgroundColor: '#2e91fc' }}
        onClick={() => {
          props.presenter.backToTop()
        }}
      >
        &#8593; Top
      </div>
    </>
  )
})

export const NavigationBackToTopComponent = withInjection({
  presenter: NavigationPresenter
})(NavigationBackToTopComp)
