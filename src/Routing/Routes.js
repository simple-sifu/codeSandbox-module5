import { injectable } from 'inversify'

@injectable()
export class Routes {
  routes = [
    {
      routeId: 'homeLink',
      routeDef: {
        path: '/app/home'
      },
      onEnter: () => {
        console.log('enter home')
      },
      onLeave: () => {
        console.log('leave home')
      }
    },
    {
      routeId: 'booksLink',
      routeDef: {
        path: '/app/books'
      }
    },
    {
      routeId: 'addBooksLink',
      routeDef: {
        path: '/app/books/add'
      }
    },
    {
      routeId: 'authorsLink',
      routeDef: {
        path: '/app/authors'
      }
    },
    {
      routeId: 'addAuthorsLink',
      routeDef: {
        path: '/app/authors/add'
      }
    },
    {
      routeId: 'mapLink',
      routeDef: {
        path: '/app/authors/map'
      }
    },
    {
      routeId: 'authorPolicyLink',
      routeDef: {
        path: '/app/authors/policy'
      }
    },
    {
      routeId: 'loginLink',
      routeDef: {
        path: '/app/authentication/login'
      }
    }
  ]
}
