import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthorization } from '../Session';
import Duel from './Component';
import {
  addDuelSolution,
  resetDuelFinished,
  resetConsoleResults,
  submit,
  setConsoleResults,
  setDuelComplete,
  clearDuelPrompt,
} from '../../actions/duel';

const mapStateToProps = state => ({
  player: state.duel.player,
  loading: state.duel.loading,
  title: state.duel.title,
  opponent: state.duel.opponent,
  console: state.duel.console,
  opponentConsole: state.duel.opponentConsole,
  solution: state.duel.solution,
  opponentSolution: state.duel.opponentSolution,
  passing: state.duel.passing,
  opponentPassing: state.duel.opponentPassing,
  tests: state.duel.tests,
  testDescriptions: state.duel.testDescriptions,
  testResults: state.duel.testResults,
  message: state.duel.message,
  waiting: state.duel.waiting,
});

const mapDispatchToProps = {
  addDuelSolution,
  resetDuelFinished,
  resetConsoleResults,
  submit,
  setConsoleResults,
  setDuelComplete,
  clearDuelPrompt,
};

const condition = authUser => !!authUser;

const enhance = compose(
  withAuthorization(condition),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

const DuelContainer = enhance(Duel);
export default DuelContainer;
