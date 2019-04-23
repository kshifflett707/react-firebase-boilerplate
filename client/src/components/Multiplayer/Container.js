import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthorization } from '../Session';
import Multiplayer from './Component';

const mapStateToProps = state => ({
  title: state.multiplayer.title,
  solution: state.multiplayer.solution,
  timer: state.multiplayer.timer,
});

const condition = authUser => !!authUser;

const enhance = compose(
  withAuthorization(condition),
  connect(
    mapStateToProps,
    null,
  ),
);

const MultiplayerContainer = enhance(Multiplayer);
export default MultiplayerContainer;
