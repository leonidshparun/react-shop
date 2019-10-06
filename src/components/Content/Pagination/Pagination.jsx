import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
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
  border-radius: 15px;
`;

const Pagination = ({ pages, click, active }) => {
  const pageList = [];

  for (let page = 0; page < pages; page += 1) {
    pageList.push(
      <NavButton
        active={page === active}
        key={page}
        onClick={() => click(page)}
      >
        {page + 1}
      </NavButton>
    );
  }

  return pages > 1 ? (
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
  ) : null;
};

export default Pagination;
