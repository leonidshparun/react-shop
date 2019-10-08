import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.big ? 'flex-start' : 'center')};
  align-content: space-around;
  width: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Element = styled.span`
  margin: 3px;
  font-size: ${props => (props.big ? '20px' : '15px')};
  padding: ${props => (props.big ? '5px' : '3px')};
  border: ${props =>
    props.status ? '1px solid black' : '1px solid #9e9e9e85'};
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: #00bcd450;
  }
`;

const Selector = ({ data, select, selected, show, type }) => (
  <Container show={show} big={!!type}>
    {data
      .sort((a, b) => a - b)
      .map(size => (
        <Element
          big={!!type}
          onClick={() => select(size)}
          key={size}
          status={selected.includes(size)}
        >
          {size}
        </Element>
      ))}
  </Container>
);

export default Selector;
