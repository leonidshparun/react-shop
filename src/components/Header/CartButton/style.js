import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;

  @keyframes a {
    15% {
      transform: translateX(6px);
    }
    30% {
      transform: translateX(-6px);
    }
    40% {
      transform: translateX(4px);
    }
    50% {
      transform: translateX(-4px);
    }
    65% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(0);
    }
  }

  :hover {
    animation: a 0.7s ease;
    animation-iteration-count: 1;
  }
`;

export const Title = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: bold;
  display: ${props => (props.isFull ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding-right: 5px;
`;

export const Icon = styled.svg`
  width: ${props => (props.isFull ? '36px' : '30px')};
  height: ${props => (props.isFull ? '36px' : '30px')};
`;

export const Chip = styled.span`
  background: #222222;
  color: #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  position: absolute;
  right: -6px;
  top: -3px;
  text-align: center;
  line-height: 18px;
  font-size: 10px;
`;
