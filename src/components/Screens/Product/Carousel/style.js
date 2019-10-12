import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const ThumbsContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 110px;
  max-width: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
