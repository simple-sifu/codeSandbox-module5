import { NavigationPresenter } from './NavigationPresenter'
import { Router } from '../Routing/Router'
import { RoutingState } from '../Routing/RoutingState'
import { Types } from '../Core/Types'
import { FakeHttpGateway } from '../Core/FakeHttpGateway'
import { FakeRouterGateway } from '../Routing/FakeRouterGateway'
import { Container } from 'inversify'

let container = null

beforeEach(() => {
  container = new Container({
    autoBindInjectable: true,
    defaultScope: 'Transient'
  })

  container.bind(Types.IDataGateway).to(FakeHttpGateway).inSingletonScope()
  container.bind(Types.IRouterGateway).to(FakeRouterGateway).inSingletonScope()
  container.bind(RoutingState).to(RoutingState).inSingletonScope()
  container.bind(Router).to(Router).inSingletonScope()
})

/// navigation path ///
/// home
/// ----> booksLink
/// ---------------> home (skips out the expandable nodes)
///
it('should navigate back to root from anywhere', () => {
  let routerGateway = container.get(Types.IRouterGateway)
  let navigationPresenter = container.get(NavigationPresenter)
  let router = container.get(Router)
  let routingState = container.get(RoutingState)

  routerGateway.goToPath = jest.fn()

  //pivot the app to the home link
  routingState.currentState.routeId = 'homeLink'

  // anchor - check the naviationPresenter
  expect(navigationPresenter.currentSelectedNavigationNode).toBe('homeLink')
  expect(navigationPresenter.isTop).toBe(true)
  // click - the correct menu item (remember to pivot the routingState.currentState.routeId)
  router.goToId('addBooksLink')
  expect(routerGateway.goToPath).toHaveBeenCalledWith('/app/books/add')
  routingState.currentState.routeId = 'addBooksLink' // pivot
  expect(navigationPresenter.isTop).toBe(false) // anchor
  // back - navigationPresenter.backToTop()
  navigationPresenter.backToTop()
  expect(routerGateway.goToPath).toHaveBeenCalledWith('/app/home')
  routingState.currentState.routeId = 'homeLink' // pivot
  expect(navigationPresenter.isTop).toBe(true)
  expect(navigationPresenter.currentSelectedNavigationNode).toBe('homeLink')
})
