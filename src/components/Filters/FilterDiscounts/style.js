import { Colors } from 'style/constants';

import styled from 'styled-components';

export default styled.div`
  grid-area: dc;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Colors.border};
  padding: 3px;
  border-radius: 15px;

  img {
    filter: ${props => (!props.isActive ? 'grayscale(1)' : 'none')};
  }
`;
