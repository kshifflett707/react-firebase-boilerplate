import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import GlobalStyle from '../../globalStyle';
import HeaderContainer from '../Header/Container';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import Multiplayer from '../Multiplayer/Container';
import Duel from '../Duel/Container';
import Lobby from '../Lobby/Container';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = props => (
  <ThemeProvider theme={theme(props.dark)}>
    <Router>
      <>
        <GlobalStyle />
        <Route component={HeaderContainer} />
        <Switch>
          <Route
            exact
            path={ROUTES.LANDING}
            component={LandingPage}
          />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.MULTIPLAYER} component={Multiplayer} />
          <Route path={ROUTES.DUEL} component={Duel} />
          <Route path={ROUTES.LOBBY} component={Lobby} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </Switch>
      </>
    </Router>
  </ThemeProvider>
);

const mapStateToProps = state => ({ dark: state.theme.dark });

export default compose(
  withAuthentication,
  connect(mapStateToProps),
)(App);
