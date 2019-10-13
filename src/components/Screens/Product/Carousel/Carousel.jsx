import React from 'react';
import uniqid from 'uniqid';

import { Container, ThumbsContainer } from './style';

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
    const { items } = this.state;
    const { imageURL } = this.props;
    return (
      <ThumbsContainer>
        <button
          style={{ padding: 5 }}
          type="button"
          key={uniqid()}
          onClick={() => this.slideTo(0)}
        >
          <img src={imageURL} alt="item" width="100" />
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
      </ThumbsContainer> // temporary placegolders
    );
  };

  renderFrame = () => {
    const { currentIndex } = this.state;

    const { imageURL } = this.props;
    return <img src={imageURL} alt={currentIndex} width="100%" />;
  };

  render() {
    return (
      <Container>
        {this.renderFrame()}
        {this.renderThumbs()}
      </Container>
    );
  }
}

export default Gallery;
