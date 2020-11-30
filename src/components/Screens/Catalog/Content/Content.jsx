import React, { Component } from 'react';

import { connect } from 'react-redux';

import Alert from 'shared/Alert/Alert';
import ProductList from './ProductList/ProductList';
import Pagination from './Pagination/Pagination';

import { Wrapper } from './style';

class ContentConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 50,
      currentPage: 0
    };
    this.timer = null;
  }

  componentDidUpdate(prevProps) {
    const { currentPage, itemsPerPage } = this.state;
    const { content } = this.props;
    const pages = content ? Math.ceil(content.length / itemsPerPage) : 0;
    if (pages !== 0 && currentPage >= pages && this.props !== prevProps) {
      this.changePageHandler(pages - 1);
    }
  }

  changePageHandler = page => {
    const { currentPage } = this.state;
    if (currentPage !== page) {
      this.setState({ currentPage: page });
    }
  };

  renderProducts = () => {
    const { currentPage, itemsPerPage } = this.state;
    const { content } = this.props;
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
    return <Wrapper>{this.renderProducts()}</Wrapper>;
  }
}

const mapStateToProps = ({ content }) => ({ content });

const Content = connect(mapStateToProps)(ContentConnected);

export default Content;
