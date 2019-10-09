import React, { Component } from 'react';

import { connect } from 'react-redux';

import Spinner from 'shared/UI/Spinner/Spinner';

import Alert from 'shared/Alert/Alert';
import Server from 'server/server';

import ProductList from './ProductList/ProductList';
import Pagination from './Pagination/Pagination';

import { Wrapper } from './style';

class ContentConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: 8,
      currentPage: 0,
      content: null,
      loading: true
    };
    this.timer = null;
  }

  componentDidMount() {
    this.fetchData();
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

  fetchData = () => {
    const { filter } = this.props;
    Server.getFiltredContent(filter).then(this.onLoad);
  };

  onLoad = content => {
    this.setState({ content, loading: false });
    this.timer = null;
  };

  updateContent = () => {
    this.setState({ loading: true });
    this.fetchData();
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