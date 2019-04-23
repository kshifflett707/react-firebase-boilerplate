import { connect } from 'react-redux';
import { addSolution } from '../../actions/prompt';
import Editor from './Component';

export const mapStateToProps = state => ({
  solution: state.multiplayer.solution,
  roomId: state.multiplayer.roomId,
  dark: state.theme.dark,
});

const mapDispatchToProps = { addSolution };

const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);

export default EditorContainer;
