import React from 'react';

import Selector from '../../../UI/Selector/Selector';

import Wrapper from '../Filter.styled';

const Sizes = ({ initial, sizes, change }) => (
  <Wrapper>
    <p>Size:</p>
    <button type="button" onClick={() => change()}>
      all
    </button>
    <Selector
      data={initial}
      select={size => change(size)}
      selected={Object.keys(sizes)}
    />
  </Wrapper>
);

export default Sizes;
