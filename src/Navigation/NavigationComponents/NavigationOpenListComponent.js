import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../../Core/WithPresenter'
import { NavigationPresenter } from '../NavigationPresenter'
import { Router } from '../../Routing/Router'

export const NavigationOpenListComp = observer((props) => {
  return (
    <>
      <div
        className="navigation-item"
        style={{
          backgroundColor: props.node.model.type === 'link' ? '#E4257D' : '#3DE7CF'
        }}
        onClick={() => {
          if (props.node.model.type === 'link') {
            props.Router.goToId(props.node.model.id)
          } else {
            props.node.model.func()
          }
        }}
      >
        {props.node.model.text}
      </div>
    </>
  )
})

export const NavigationOpenListComponent = withInjection({
  NavigationPresenter: NavigationPresenter,
  Router: Router
})(NavigationOpenListComp)
