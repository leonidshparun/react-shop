import styled from 'styled-components';

export default styled.p`
  grid-area: ${props => (!props.crossed ? 'price' : 'discount')};
  font-size: 16px;
  font-weight: ${props => (props.crossed ? 400 : 600)};
  color: ${props => (props.crossed ? '#607D8B' : '#222')};
  text-decoration: ${props => (props.crossed ? 'line-through' : 'none')};
  width: 100%;
  text-align: right;
`;
