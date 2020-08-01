import { Button, Flex, styled } from '@icstark/ui'
import { FaBars, MdPowerSettingsNew } from '@icstark/utils'

const respWidth = () =>
  window.innerWidth < 540 ? '150px' : window.innerWidth < 900 ? '200px' : window.innerWidth < 1400 ? '250px' : '300px'

export const sideBarOpenWidth = respWidth()
export const sideBarWidth = window.innerWidth < 540 ? '0px' : '50px'

export const HeaderDiv = styled(Flex)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${(props: any) => props.theme.colors.secondary};
  z-index: 500;
`

export const PortalDiv: any = styled.div`
  height: 100%;
  overflow: hidden auto;
  box-shadow: inset 0 3px 3px 3px rgba(255, 255, 255, 0.5);
  ${(props: any) => {
    return `
      margin-left: ${props.menuOpen || !props.hasSidebar ? '0px' : sideBarWidth};
      width: calc(100vw - ${props.sidebar ? (props.menuOpen ? sideBarOpenWidth : sideBarWidth) : '0px'});
    `
  }};
`

export const SideBarDiv: any = styled(Flex)`
  top: 0;
  bottom: 0;
  overflow: hidden auto;
  padding-top: 25px;
  background: ${(props: any) => props.theme.colors.secondary};
  transition: 0.4s linear;
  ${(props: any) => `
    z-index: ${props.theme.global.zIndex.sidebar};
    position: ${props.menuOpen ? 'relative' : 'absolute'};
    width: ${props.menuOpen ? sideBarOpenWidth : sideBarWidth};
    span {
      opacity: 0;
      overflow: hidden;
      transition: 0s;
    }
    .icon {
      margin-right: ${props.menuOpen ? '10px' : '-109px'};
    }
    .chevron {
      opacity: 0;
      margin-left: auto;
      margin-right: ${props.menuOpen ? '15px' : 0};
    }
    .active-child {
      background: ${props.menuOpen ? '#e46b33;' : 'inherit'};
    }
  `}

  &:hover {
    width: ${sideBarOpenWidth};
    transition: 0.4s linear;
    span {
      opacity: 1;
      transition: 0.3s ease;
    }
    .icon {
      margin-right: 10px;
    }
    .chevron {
      opacity: 1;
      margin-right: 15px;
    }
    .active-child {
      background: #e46b33;
    }
    .hover .active-sub-menu {
      transform: scale(1, 1);
      height: auto;
    }
  }
`

export const MenuLevel: any = styled.div`
  display: flex;
  flex-direction: column;
  > a {
    opacity: 0.7;
    &.active-child,
    &.active {
      opacity: 1;
    }
  }
  &:hover {
    > a {
      opacity: 1;
    }
  }
  &.hover {
    > a {
      .chevron {
        transform: rotateZ(180deg);
      }
    }
  }
  > div {
    height: 0px;
    overflow: hidden;
  }
`

export const Anchor: any = styled.a`
  color: white;
  display: flex;
  align-items: center;
  padding: 12px 0 12px 15px;
  font-size: 14px;
  letter-spacing: 0.8px;
  text-decoration: none;
  overflow: hidden;
  &.active {
    background: #20242f;
  }
  > span {
    ${(props: any) => `
      transition: 0s;
      opacity: ${props.menuOpen ? '1' : '0'};
    `}
  }
`

export const MenuIcon = styled(FaBars)`
  color: #ffffff;
  cursor: pointer;
`

export const LogoutIcon = styled(MdPowerSettingsNew)`
  color: #f68220;
  cursor: pointer;
  margin-right: 10px;
`

export const AppIcon = styled.img`
  height: 16px;
`

export const DarkButton = styled.button`
  border: 1px solid #fff;
  padding: 4px 12px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.2px;
  background: transparent;
  transition: 0.6s ease;
  color: #fff;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    cursor: pointer;
    transition: 0.4s ease;
  }
  @media (max-width: 540px) {
    padding: 4px 8px;
  }
`

export const Section = styled.section`
  width: 100%;
  position: relative;
  box-sizing: border-box;
`

export const SubSection = styled.div`
  margin: 0 auto;
  transition: 0.6s linear;
  @media (min-width: 1441px) {
    transition: 0.6s linear;
    width: 70%;
  }
  @media (max-width: 1440px) {
    transition: 0.6s linear;
    width: 80%;
  }
  @media (max-width: 1200px) {
    transition: 0.6s linear;
    width: 85%;
  }
  @media (max-width: 786px) {
    transition: 0.6s linear;
    width: 90%;
  }
  @media (max-width: 540px) {
    transition: 0.6s linear;
    width: 95%;
  }
`

export const ThemeButton = styled(Button)`
  background-color: #f68220;
  justify-content: center;
  width: 100%;
  color: white;
  &:hover {
    background-color: #f68220;
    color: white;
  }
`
