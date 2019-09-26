import React, { Component } from 'react';

import { connect } from 'react-redux';

import Selector from '../../../UI/Selector/Selector';

import { addItemToCart } from '../../../../store/actions/actions';

import {
  CardContainer,
  ProductName,
  Price,
  Tip,
  AddToCartButton
} from './Card.styled';

class CardConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipText: 'Select size',
      showTip: false,
      selectedSize: []
    };
    this.timer = null;
  }

  componentWillUnmount() {
    // console.log('unmount card', this.props.data.id)
    clearTimeout(this.timer);
  }

  handleChange = size => {
    this.setState({ selectedSize: [size] });
  };

  handleSubmit = event => {
    const { selectedSize } = this.state;
    const { data, addItem } = this.props;
    event.preventDefault();
    if (!selectedSize[0]) {
      this.setState({ showTip: true });
      this.timer = setTimeout(
        () => this.setState({ showTip: false, tipText: 'Select size' }),
        900
      );
    } else {
      addItem({
        id: data.id,
        size: selectedSize[0]
      });
      this.setState({ showTip: true, tipText: 'Added' });
      this.timer = setTimeout(() => this.setState({ showTip: false }), 500);
    }
  };

  // componentDidMount() {
  // 	console.log('mount card', this.props.data.id)
  // }

  render() {
    const { showTip, selectedSize, tipText } = this.state;
    const { data } = this.props;
    return (
      <CardContainer show={showTip}>
        <img src={`../img/item${data.id}.jpg`} alt={data.title} width="250px" />

        <ProductName>
          {`${data.brand} ${data.title} - ${data.style}`}
        </ProductName>

        <Selector
          selected={selectedSize}
          data={data.availableSizes}
          select={size => this.handleChange(size)}
        />

        <Price>{`${data.price} €`}</Price>

        <AddToCartButton active={selectedSize} onClick={this.handleSubmit}>
          ADD TO CART
        </AddToCartButton>

        <Tip show={showTip}>
          <p>{tipText}</p>
        </Tip>
      </CardContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

const Card = connect(
  null,
  mapDispatchToProps
)(CardConnected);

export default Card;
