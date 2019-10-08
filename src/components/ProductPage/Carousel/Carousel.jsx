import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const ThumbsContainer = styled.div`
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

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: props.id - 1,
      items: [1, 2, 3, 4, 5, 6] // temporary data
    };
  }

  slideTo = i => {
    console.log('next slide position', i);
    // this.setState({ currentIndex: i });
  };

  renderThumbs = () => {
    const { items, currentIndex } = this.state;
    return (
      <ThumbsContainer>
        <button
          style={{ padding: 5 }}
          type="button"
          key={uniqid()}
          onClick={() => this.slideTo(0)}
        >
          <img
            src={`../img/item${currentIndex + 1}.jpg`}
            alt="item"
            width="100"
          />
        </button>
        {items.map((item, i) => (
          <button
            style={{ padding: 5 }}
            type="button"
            key={uniqid()}
            onClick={() => this.slideTo(i + 1)}
          >
            <img src="../img/item0.jpg" alt={item} width="100" />
          </button>
        ))}
      </ThumbsContainer>
    );
  };

  renderGallery = () => {
    const { currentIndex } = this.state;

    return (
      <img
        src={`../img/item${currentIndex + 1}.jpg`}
        alt={currentIndex}
        width="100%"
      />
    );
  };

  render() {
    return (
      <Container>
        {this.renderGallery()}
        {this.renderThumbs()}
      </Container>
    );
  }
}

export default Gallery;
