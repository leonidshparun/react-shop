import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transition: all 0.5s;
  background-color: #140827;
  color: white;
  margin: 5px 0;

  button {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 16px;
    width: 20px;
    height: 20px;
    color: white;
  }
`;

export const Price = styled.p`
  width: 70px;
  font-size: 24px;
  justify-content: center;
  display: flex;
  align-items: flex-end;
`;

export const Description = styled.div`
  width: 320px;
  padding: 5px;
  font-size: 16px;
`;
