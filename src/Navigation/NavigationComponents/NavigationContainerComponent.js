import * as React from 'react'
import { observer } from 'mobx-react'
import { LogoutComponent } from '../../Authentication/LogoutComponent'
import { withInjection } from '../../Core/WithPresenter'
import { CurrentPagePresenter } from '../../CurrentPagePresenter'
import { NavigationPresenter } from '../NavigationPresenter'
import { NavigationExpandComponent } from './NavigationExpandComponent'
import { NavigationOpenListComponent } from './NavigationOpenListComponent'
import { NavigationBackToTopComponent } from './NavigationBackToTopComponent'

export const NavigationContainerComp = observer((props) => {
  return (
    <>
      <div className="navigation-container">
        <>
          <div className="navigation-item" style={{ backgroundColor: '#5BCA06' }}>
            {props.NavigationPresenter.findCurrentNode().model.text} >{' '}
            {props.NavigationPresenter.findCurrentNode().model.id}
          </div>
          {props.NavigationPresenter.findCurrentNode().children.map((node, i) => {
            if (node.model.type === 'expand') {
              return <NavigationExpandComponent key={i} node={node} />
            } else return <NavigationOpenListComponent key={i} node={node} />
          })}
        </>

        {!props.NavigationPresenter.isTop && <NavigationBackToTopComponent />}

        <LogoutComponent />
      </div>
    </>
  )
})

export const NavigationContainerComponent = withInjection({
  CurrentPagePresenter: CurrentPagePresenter,
  NavigationPresenter: NavigationPresenter
})(NavigationContainerComp)
