import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/WithPresenter'

export const AddBooksComp = observer((props) => {
  return (
    <>
      <h3>Add book</h3>
    </>
  )
})

export const AddBooksComponent = withInjection({})(AddBooksComp)
