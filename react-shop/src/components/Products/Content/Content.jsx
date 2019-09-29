import React, { Component } from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components';

import data from '../../../static/products/products.json';

import Page from './Page/Page';
import Pagination from './Pagination/Pagination';

import Spinner from '../../UI/Spinner/Spinner';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 600px;
  min-width: 1200px;
  align-items: center;
  justify-content: center;
`;

class ContentConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 4,
      currentPage: 0,
      content: null,
      loading: true
    };
    this.timer = null;
  }

  componentDidMount() {
    this.fetchData(500);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, itemsPerPage, content } = this.state;
    if (prevProps !== this.props) {
      this.updateContent();
    }
    if (prevState !== this.state) {
      const pages = Math.ceil(content.length / itemsPerPage);
      if (currentPage >= pages && pages !== 0)
        this.changePageHandler(pages - 1);
    }
  }

  updateContent = () => {
    this.setState({ loading: true });
    this.fetchData(800);
  };

  onLoad = content => {
    this.setState({ content, loading: false });
    this.timer = null;
  };

  fetchData = time => {
    const promise = new Promise(resolve => {
      this.timer = setTimeout(() => {
        resolve(this.getFiltredContent());
      }, time);
    });

    promise.then(this.onLoad);
  };

  getFiltredContent = () => {
    const { filter } = this.props;
    const [min, max] = filter.prices;
    let { search } = filter;
    search = search.toLowerCase();
    return data.products
      .filter(product => {
        const itemSearch = `${product.brand} ${product.title} ${product.style}`.toLowerCase();
        return (
          itemSearch.includes(search) && // searchbar
          product.availableSizes.some(size => filter.sizes[size]) && // filter by sizes
          (product.price >= min && product.price <= max) && // filter by prices
          filter.brands[product.brand] // filter by brands
        );
      })
      .sort((a, b) => {
        if (filter.sortPrices === 'init') return true;
        return filter.sortPrices === 'min'
          ? a.price - b.price
          : b.price - a.price;
      }); // sort by prices
  };

  changePageHandler = page => {
    const { currentPage } = this.state;
    if (currentPage !== page) {
      this.setState({ currentPage: page });
    }
  };

  renderContent() {
    const { currentPage, itemsPerPage, content } = this.state;

    const totalPages = Math.ceil(content.length / itemsPerPage);
    const renderedItems = content.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );

    return totalPages ? (
      <>
        <Page content={renderedItems} />
        <Pagination
          pages={totalPages}
          active={currentPage}
          click={this.changePageHandler}
        />
      </>
    ) : (
      <p>There are no products.</p>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <Container>{loading ? <Spinner /> : this.renderContent()}</Container>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filter
});

const Content = connect(mapStateToProps)(ContentConnected);

export default Content;
