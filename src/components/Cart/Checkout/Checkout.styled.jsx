import styled from 'styled-components';

import Button from '../../UI/Button/Button';

export const Container = styled.div`
  bottom: 100px;
  width: 100%;
  height: 130px;
  background-color: #ffeb3b;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 24px;
    padding: 5px;
  }

  p {
    font-size: 28px;
  }

  span {
    font-size: 30px;
    font-weight: 600;
  }
`;

export const BuyButton = styled(Button)`
  font-weight: 400;
  font-size: 32px;
  height: 70px;
  width: 100%;
`;
