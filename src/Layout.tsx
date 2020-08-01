import { Flex, Loader, Grid } from '@icstark/ui'
import React, { Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import SideBar from './components/Sidebar'
import { RoutesPath } from './config/routes.config'
import { isAuthenticated } from './utility/func'
import { constants } from './config/constants'
import Header from './components/Header/Header'
import { PortalDiv } from './styled'
import Footer from './components/Footer/Footer'

const { header } = constants

const Layout: any = (props: any) => {
  const { route, routesConfig, menuOpen, setMenuOpen } = props
  const RouteComponent: any = route.component
  if ((route.authenticated && isAuthenticated()) || !route.authenticated) {
    return (
      <Grid gridTemplateRows={`${header.height}px auto`} style={{ height: '100%' }}>
        {route.layout && route.layout.includes('header') && (
          <Header setMenuOpen={() => setMenuOpen()} {...props} />
        )}
        <Flex
          style={{
            overflow: 'hidden',
            position: 'relative',
            height: `calc(100vh - ${header.height}px)`
          }}
        >
          {route.layout && route.layout.includes('sidebar') && (
            <SideBar routes={routesConfig} menuOpen={menuOpen} paramsData={[]} />
          )}
          <PortalDiv
            hasSidebar={route.layout && route.layout.includes('sidebar')}
            menuOpen={menuOpen}
            sidebar={route.layout && route.layout.includes('sidebar')}
          >
            <Suspense fallback={<Loader />}>
              <RouteComponent routePath={route.path} routesConfig={routesConfig} {...props} />
            </Suspense>
            {route.layout && route.layout.includes('footer') && <Footer />}
          </PortalDiv>
        </Flex>
      </Grid>
    )
  } else if (
    route.authenticated &&
    !isAuthenticated() &&
    window.location.pathname !== RoutesPath.Login
  ) {
    return <Redirect to="/login" />
  } else {
    return <div>404</div>
  }
}

export default Layout
