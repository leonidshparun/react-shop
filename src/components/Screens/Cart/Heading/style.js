import { Colors } from 'style/constants';
import styled from 'styled-components';

export default styled.thead`
  border-top: 1px solid ${Colors.border};
  line-height: 1.4;

  td {
    color: ${Colors.textMain};
    font-weight: bold;
    padding: 8px;
    vertical-align: middle;
    text-transform: uppercase;
    font-size: 13px;
    text-align: center;
  }
`;
