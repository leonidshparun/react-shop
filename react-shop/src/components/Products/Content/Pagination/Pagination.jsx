import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px;
`;

const NavButton = styled.button`
  margin: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: ${props => (props.active ? '#00bcd45f' : '')};

  :hover:enabled {
    background-color: #00bcdf;
  }
`;

const Pagination = ({ pages, click, active }) => {
  const pageList = [];

  for (let el = 0; el < pages; el += 1) {
    pageList.push(
      <NavButton active={el === active} key={el} onClick={() => click(el)}>
        {el + 1}
      </NavButton>
    );
  }

  return (
    <Container>
      <NavButton disabled={active === 0} onClick={() => click(active - 1)}>
        {'<'}
      </NavButton>

      {pageList}

      <NavButton
        disabled={active === pages - 1}
        onClick={() => click(active + 1)}
      >
        {'>'}
      </NavButton>
    </Container>
  );
};

export default Pagination;
