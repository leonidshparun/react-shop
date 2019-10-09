import React from 'react';

import { NavButton, Container } from './style';

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
