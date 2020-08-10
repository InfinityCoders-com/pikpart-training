import { FaChevronDown } from '@icstark/utils'
import React from 'react'
import { matchPath, withRouter } from 'react-router'
import { MenuLevel, Anchor, SideBarDiv } from '../styled'
// import { Anchor, MenuLevel, SideBarDiv } from '../style/styled'

const matchPaths = (link: string, path: string) => {
  return matchPath(path, {
    path: link,
    exact: true,
    strict: true
  })
}

function findActiveRouteusingLoc(routeGroup: any, path: string) {
  var x: any = undefined
  routeGroup.forEach((route: any) => {
    if (matchPaths(route.link, path)) {
      x = route.bLabel
    } else if (route.children && route.children.length) {
      const y = findActiveRouteusingLoc(route.children, path)
      x = y || x
    }
  })
  if (x) {
    return x
  }
}

function SideBar(props: any) {
  let { routes, menuOpen, history, location } = props
  const [activeMenuItem, setActiveMenuItem] = React.useState(() => {
    return findActiveRouteusingLoc(routes, location.pathname) || ''
  })

  function links(link: string) {
    if (link && !matchPaths(link, location.pathname)) {
      history.push(link)
    }
  }

  const menuLevel = (group: any, level: number) =>
    group.map((item: any, i: number) => {
      const Icon = item.icon
      const linkClass = matchPaths(item.link, location.pathname) ? 'active-child' : ''
      const activeParentLink = location.pathname.includes(item.link) ? 'active' : ''
      const activeSubMenu =
        activeMenuItem === item.bLabel || location.pathname.includes(item.link)
          ? 'active-sub-menu'
          : ''
      const isAnyChildActive = {
        marginRight: '-140px',
        paddingLeft: 25
      }
      const settings = item.label === 'Settings' ? { marginTop: 'auto' } : {}
      return (
        item.label !== '' && (
          <MenuLevel
            key={i}
            style={settings}
            className={activeMenuItem === item.bLabel ? 'hover' : ''}
          >
            <Anchor
              className={item.children ? activeParentLink : linkClass}
              href={item.children ? '' : item.link}
              menuOpen={menuOpen}
              onClick={(e: any) => {
                e.preventDefault()
                e.stopPropagation()
                links(!item.children && item.link)
                setActiveMenuItem(activeMenuItem === item.bLabel ? '' : item.bLabel)
              }}
            >
              {Icon && <Icon size={'15px'} className="icon" />}
              <span style={{ color: '#fff' }} key={i}>
                {item.label}
              </span>
              {item.children && <FaChevronDown className="chevron" />}
            </Anchor>
            {item.children && (
              <div className={activeSubMenu} style={isAnyChildActive}>
                {menuLevel(item.children, level + 1)}
              </div>
            )}
          </MenuLevel>
        )
      )
    })

  return (
    <SideBarDiv column menuOpen={menuOpen}>
      {menuLevel(routes, 1)}
    </SideBarDiv>
  )
}

export default withRouter(SideBar)
