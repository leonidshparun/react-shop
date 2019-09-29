import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  width: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Element = styled.span`
  margin: 3px;
  padding: 3px;
  font-size: 15px;
  border: ${props =>
    props.status ? '1px solid black' : '1px solid #9e9e9e85'};
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: #00bcd450;
  }
`;

const Selector = props => {
  const { data, select, selected, show } = props;
  return (
    <Container show={show}>
      {data
        .sort((a, b) => a - b)
        .map(size => (
          <Element
            onClick={() => select(size)}
            key={size}
            status={selected.includes(size)}
          >
            {size}
          </Element>
        ))}
    </Container>
  );
};

export default Selector;
