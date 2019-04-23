import React from 'react';
import styled from 'styled-components/macro';
import HeaderLogo from './Logo';
import HeaderDarkButtonContainer from './DarkButton/Container';
import HeaderNavLink from './NavLink';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: stretch;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-bottom: 1px solid ${props => props.theme.border};
  height: 48px;
  padding: 0 10vw;
  background-color: ${props => props.theme.foreground};
  user-select: none;

  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <Wrapper>
    <HeaderLogo />
    <HeaderDarkButtonContainer />
    <HeaderNavLink exact to={ROUTES.LANDING}>
      Landing
    </HeaderNavLink>
    <HeaderNavLink to={ROUTES.HOME}>Home</HeaderNavLink>
    <HeaderNavLink to={ROUTES.ACCOUNT}>Account</HeaderNavLink>
    {!!authUser.roles[ROLES.ADMIN] && (
      <HeaderNavLink to={ROUTES.ADMIN}>Admin</HeaderNavLink>
    )}
    <HeaderNavLink to={ROUTES.CHAT}>Chat</HeaderNavLink>
    <HeaderNavLink to={ROUTES.MULTIPLAYER}>Multiplayer</HeaderNavLink>
    <HeaderNavLink to={ROUTES.DUEL}>Duel</HeaderNavLink>
    <HeaderNavLink to={ROUTES.LOBBY}>Lobby</HeaderNavLink>
    <HeaderNavLink as="span">
      <SignOutButton />
    </HeaderNavLink>
  </Wrapper>
);

const NavigationNonAuth = () => (
  <Wrapper>
    <HeaderLogo />
    <HeaderDarkButtonContainer />
    <HeaderNavLink exact to={ROUTES.LANDING}>
      Landing
    </HeaderNavLink>
    <HeaderNavLink to={ROUTES.SIGN_IN}>Login</HeaderNavLink>
  </Wrapper>
);

export default Header;
