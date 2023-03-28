import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../../Core/WithPresenter'
import { NavigationPresenter } from '../NavigationPresenter'
import { Router } from '../../Routing/Router'

export const NavigationExpandComp = observer((props) => {
  const [showInfo, setShowInfo] = useState(true)

  return (
    <>
      <div
        className="navigation-item"
        style={{ backgroundColor: '#2e91fc' }}
        onClick={() => {
          setShowInfo(!showInfo)
        }}
      >
        {(showInfo && '[-]') || '[+]'}
        {props.node.model.text}
      </div>
      {props.node.children.map((node, i) => (
        <div
          className="navigation-item"
          style={{
            display: showInfo ? 'block' : 'none',
            backgroundColor: '#E4257D'
          }}
          key={i}
          onClick={() => {
            props.Router.goToId(node.model.id)
          }}
        >
          {node.model.text}
        </div>
      ))}
    </>
  )
})

export const NavigationExpandComponent = withInjection({
  NavigationPresenter: NavigationPresenter,
  Router: Router
})(NavigationExpandComp)
