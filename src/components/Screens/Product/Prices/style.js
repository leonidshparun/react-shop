import styled from 'styled-components';

export default styled.p`
  font-family: Roboto, sans-serif;
  line-height: 1.4;
  white-space: nowrap;
  font-size: ${props => (props.crossed ? '18px' : '30px')};
  color: ${props => (props.crossed ? '#607D8B' : '#222')};
  text-decoration: ${props => (props.crossed ? 'line-through' : 'none')};
  padding: 0 10px;
`;
