import React, { Component } from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components';

import data from '../../../static/products/products.json';

import Page from './Page/Page';
import Pagination from './Pagination/Pagination';

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

class ContentConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 8,
      currentPage: 0,
      content: this.getFiltredContent()
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, itemsPerPage, content } = this.state;
    if (prevProps !== this.props) {
      (() => {
        this.setState({ content: this.getFiltredContent() });
      })();
    }
    if (prevState !== this.state) {
      const pages = Math.ceil(content.length / itemsPerPage);
      if (currentPage >= pages && pages !== 0)
        this.changePageHandler(pages - 1);
    }
  }

  getFiltredContent = () => {
    console.log('VERY HARD CALCULATIONS');
    const { filter, sort } = this.props;
    const [min, max] = filter.prices;
    let { search } = filter;
    search = search.toLowerCase();
    return data.products
      .filter(product => {
        const itemSearch = `${product.brand} ${product.title} ${product.style}`.toLowerCase();
        return itemSearch.includes(search);
      }) // searchbar
      .filter(product => filter.brands[product.brand]) // filter by brands
      .filter(product => product.price >= min && product.price <= max) // filter by prices
      .filter(product =>
        product.availableSizes.some(size => filter.sizes[size])
      ) // filter by sizes
      .sort((a, b) => {
        if (sort.prices === 'init') return true;
        return sort.prices === 'min' ? a.price - b.price : b.price - a.price;
      }); // sort by prices
  };

  changePageHandler = page => {
    const { currentPage } = this.state;
    if (currentPage !== page) {
      this.setState({ currentPage: page });
    }
  };

  render() {
    console.log('CHECK FOR RERENDERING');
    const { currentPage, itemsPerPage, content } = this.state;

    const totalPages = Math.ceil(content.length / itemsPerPage);
    const renderedItems = content.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );

    const results = (
      <Container>
        <Page content={renderedItems} />
        <Pagination
          pages={totalPages}
          active={currentPage}
          click={this.changePageHandler}
        />
      </Container>
    );

    const noResults = (
      <Container>
        <p>There are no products.</p>
      </Container>
    );

    return totalPages ? results : noResults;
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
  sort: state.sort
});

const Content = connect(mapStateToProps)(ContentConnected);

export default Content;
