import React, { Component } from 'react';

import { connect } from 'react-redux';

import Spinner from 'components/UI/Spinner/Spinner';
import data from 'static/products/products.json';

import ProductList from './ProductList/ProductList';
import Pagination from './Pagination/Pagination';

import Alert from './Alert/Alert';

import { Wrapper } from './style';

class ContentConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 50,
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
    const pages = content ? Math.ceil(content.length / itemsPerPage) : 0;
    if (pages !== 0 && currentPage >= pages && prevState !== this.state) {
      this.changePageHandler(pages - 1);
    }
  }

  updateContent = () => {
    this.setState({ loading: true });
    this.fetchData(500);
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
    console.log('VERY HARD CALC');
    const { filter } = this.props;
    const [min, max] = filter.prices;
    let { search } = filter;
    search = search.toLowerCase();
    const { showOnlyDiscounts } = filter;
    return data.products
      .filter(product => {
        const itemSearch = `${product.brand} ${product.title} ${product.style}`.toLowerCase();
        const price = product.price * (1 - product.discount / 100);
        const hasDiscount = product.discount !== 0;
        return (
          (showOnlyDiscounts ? hasDiscount : true) &&
          itemSearch.includes(search) && // searchbar
          product.availableSizes.some(size => filter.sizes[size]) && // filter by sizes
          (price >= min && price <= max) && // filter by prices
          filter.brands[product.brand] // filter by brands
        );
      })
      .sort((a, b) => {
        const priceA = a.price * (1 - a.discount / 100);
        const priceB = b.price * (1 - b.discount / 100);
        if (filter.sortPrices === 'init') return true;
        return filter.sortPrices === 'min' ? priceA - priceB : priceB - priceA;
      }); // sort by prices
  };

  changePageHandler = page => {
    const { currentPage } = this.state;
    if (currentPage !== page) {
      this.setState({ currentPage: page });
    }
  };

  renderProducts = () => {
    const { content, currentPage, itemsPerPage } = this.state;
    let products;

    if (content.length) {
      const totalPages = Math.ceil(content.length / itemsPerPage);

      const elemsFrom = currentPage * itemsPerPage;
      const elemsTo = (currentPage + 1) * itemsPerPage;

      const renderedItems = content.slice(elemsFrom, elemsTo);

      products = (
        <>
          <ProductList content={renderedItems} />
          <Pagination
            pages={totalPages}
            active={currentPage}
            click={this.changePageHandler}
          />
        </>
      );
    } else {
      products = <Alert message="There are no products." />;
    }

    return products;
  };

  render() {
    const { loading } = this.state;
    const content = loading ? <Spinner /> : this.renderProducts();
    return <Wrapper>{content}</Wrapper>;
  }
}

const mapStateToProps = state => ({
  filter: state.filter
});

const Content = connect(mapStateToProps)(ContentConnected);

export default Content;
