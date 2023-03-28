import * as React from 'react'
import { HomeComponent } from './Home/HomeComponent'
import { withInjection } from './Core/WithPresenter'
import { observer } from 'mobx-react'
import { CurrentPagePresenter } from './CurrentPagePresenter'
import { BooksComponent } from './Books/BooksComponent'
import { AddBooksComponent } from './Books/AddBooksComponent'
import { AuthorsComponent } from './Authors/AuthorsComponent'
import { AddAuthorsComponent } from './Authors/AddAuthorsComponent'
import { AuthorPolicyComponent } from './Authors/AuthorPolicyComponent'
import { MapComponent } from './Map/MapComponent'
import { LoginRegisterComponent } from './Authentication/LoginRegisterComponent'
import { NavigationContainerComponent } from './Navigation/NavigationComponents/NavigationContainerComponent'

export const CurrentPageComp = observer((props) => {
  React.useEffect(() => {
    props.presenter.bootstrap()
  })

  const renderedComponents = [
    {
      id: 'homeLink',
      component: <HomeComponent key="homePage" />
    },
    {
      id: 'booksLink',
      component: <BooksComponent key="booksLink" />
    },
    {
      id: 'addBooksLink',
      component: <AddBooksComponent key="addBooksLink" />
    },
    {
      id: 'authorsLink',
      component: <AuthorsComponent key="authorsLink" />
    },
    {
      id: 'addAuthorsLink',
      component: <AddAuthorsComponent key="addAuthorsLink" />
    },
    {
      id: 'authorPolicyLink',
      component: <AuthorPolicyComponent key="authorPolicyLink" />
    },
    {
      id: 'mapLink',
      component: <MapComponent key="mapLink" />
    }
  ]
  return (
    <div>
      {props.presenter.currentRouteId === 'loginLink' ? (
        // <div>Create the login and register page</div>
        <LoginRegisterComponent />
      ) : (
        // <div>Create the navigation menu and content pages</div>
        <div className="container">
          <div className="left">
            <NavigationContainerComponent />
          </div>
          <div className="right">
            {renderedComponents.map((current) => {
              return props.presenter.currentRouteId === current.id && current.component
            })}
          </div>
        </div>
      )}
    </div>
  )
})

export const CurrentPageComponent = withInjection({
  presenter: CurrentPagePresenter
})(CurrentPageComp)
