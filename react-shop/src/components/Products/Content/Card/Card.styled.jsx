import styled from 'styled-components';

import Button from '../../../UI/Button/Button';

export const CardContainer = styled.div`
  height: 400px;
  width: 260px;
  margin: 10px;
  padding: 3px;
  border: 1px solid #9e9e6e50;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  transition: border-color 0.3s;
  position: relative;

  background: white;

  :hover {
    border: 1px solid #009288;
  }
`;

export const ProductName = styled.p`
  font-weight: 600;
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #0b5a53;
`;

export const Tip = styled.div`
  background-color: #009688d1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: calc(100% - 6px);
  width: calc(100% - 6px);
  visibility: ${props => (props.show ? 'visible' : 'hidden')};

  p {
    width: 100%;
    text-align: center;
    font-size: 34px;
    color: white;
    background: #673ab7;
    padding: 10px;
  }
`;

export const AddToCartButton = styled(Button)`
  width: 100%;
`;
