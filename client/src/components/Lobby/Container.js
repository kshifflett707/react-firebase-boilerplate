import { connect } from 'react-redux';
import { compose } from 'redux';
import Lobby from './Component';
import { withAuthorization } from '../Session';

const mapStateToProps = state => ({
  users: state.online.users,
});

const condition = authUser => !!authUser;

const enhance = compose(
  withAuthorization(condition),
  connect(mapStateToProps),
);

const LobbyContainer = enhance(Lobby);

export default LobbyContainer;
