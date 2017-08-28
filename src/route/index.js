import { renderRoutes } from 'react-router-config'

const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: Search
      },
      { path: '/#/signin',
        component: SignIn

      }
    ]
  }
]

ReactDOM.render((
  <BrowserRouter>

    {renderRoutes(routes)}
  </BrowserRouter>
), document.getElementById('root'))
