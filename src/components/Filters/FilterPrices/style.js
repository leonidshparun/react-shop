import { Colors } from 'style/constants';

import styled from 'styled-components';

export default styled.div`
  grid-area: pr;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.border};
  padding: 3px;
  border-radius: 15px;
`;
