import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { routesConfig, RoutesPath } from './config/routes.config'
import ErrorPages from './ErrorPages'
import Layout from './Layout'
import { isAuthenticated } from './utility/func'

function AppLayout(props: any) {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const allRoutes: any[] = []
  iterateRouteConfig(routesConfig)
  function iterateRouteConfig(routes: any) {
    routes.map((route: any, n: number) => {
      if (route.children) {
        iterateRouteConfig(route.children)
      } else {
        allRoutes.push({
          path: route.path,
          icon: route.icon,
          component: route.component,
          exact: route.exact,
          key: route.key,
          layout: route.layout,
          subType: route.subType,
          pageId: route.pageId,
          authenticated: route.authenticated
        })
      }
      return false
    })
  }

  return (
    <Switch>
      {allRoutes.map((route: any, i: number) => (
        <Route
          key={`${route.path}-${i}`}
          render={(props: any) => (
            <Layout
              route={route}
              menuOpen={menuOpen}
              setMenuOpen={() => setMenuOpen(!menuOpen)}
              routesConfig={routesConfig}
              subType={route.subType && route.subType}
              {...props}
            />
          )}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="/" component={ErrorPages} />
    </Switch>
  )
}

export default withRouter(AppLayout)
