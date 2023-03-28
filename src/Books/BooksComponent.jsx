import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/WithPresenter'

export const BooksComp = observer((props) => {
  return (
    <>
      <h3>Books</h3>
    </>
  )
})

export const BooksComponent = withInjection({})(BooksComp)
