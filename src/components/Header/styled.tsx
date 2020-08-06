import { styled } from '@icstark/ui'

export const LogInOutButton = styled.button`
  border: 1px solid black;
  padding: 4px 12px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  background: transparent;
  transition: 0.6s ease;
  margin-right: 25px;
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
export const UserProfileMenu = styled.div`
  right: 0px;
  padding: 5px 0;
  min-width: 100px;
  background: #fff;
  //   background: red;
  border-radius: 4px;
  position: absolute;
  top: calc(100% + 5px);
  flex-direction: column;
  box-shadow: 0 1px 5px rgba(204, 204, 204);
  z-index: 1;
  a {
    padding: 7px 15px;
    border-radius: 0;
    transition: 0.6s ease;
    &:hover {
      background: ${(props: any) => props.theme.colors.primary};
      color: #fff;
      transition: 0.8s ease;
    }
  }
`

export const UserMenuLink = styled.div`
  position: relative;
  $:hover {
  }
  > span {
    cursor: pointer;
    padding: 7px;
    display: flex;
    align-items: center;
    label {
      cursor: pointer;
      text-transform: capitalize;
      font-weight: 600;
      min-width: 50px;
      color: ${(props: any) => props.theme.colors.primary};
    }
  }
`
