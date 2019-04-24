import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/sqlserver';
import 'brace/theme/merbivore';
import styled from 'styled-components';

import { withFirebase } from '../Firebase';

const Editor = props => {
  console.log(props.solution);
  return (
    <Wrapper>
      <AceEditor
        mode="javascript"
        theme={props.dark ? 'merbivore' : 'sqlserver'}
        onChange={e => {
          props.firebase.duel('707').set({
            code: e,
          });
        }}
        value={props.solution}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={14}
        cursorStart={2}
        showPrintMargin={true}
        highlightActiveLine={true}
        width="100%"
        height="100%"
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </Wrapper>
  );
};

export default withFirebase(Editor);

const Wrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  width: 100%;
  margin-right: 1em;
  height: 100%;
  box-shadow: 4px 4px 12px ${props => props.theme.shadow};
  @media (max-width: 700px) {
    grid-row: 2;
    grid-column: 2 / 5;
    height: 100%;
  }
`;
