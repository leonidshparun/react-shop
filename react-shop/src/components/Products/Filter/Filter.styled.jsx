import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px;
  width: 200px;
  position: relative;

  p {
    font-size: 24px;
    margin: 10px;
  }

  button {
    position: absolute;
    right: 20px;
    top: 20px;
    background: #00bcd450;
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
`;

export default Wrapper;
