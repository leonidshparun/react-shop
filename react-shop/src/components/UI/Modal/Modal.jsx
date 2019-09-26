import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const modalRoot = document.getElementById('modal-root');

const ModalContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #009688f0;
  height: 150px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      content: 'MODAL CONTENT'
    };
    this.el = document.createElement('div');
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleHide = () => {
    this.setState({ showModal: false });
  };

  setTimer = time => {
    if (time) setTimeout(() => this.setState({ showModal: false }), time);
  };

  componentDidMount() {
    modalRoot.appendChild(this.el);
    // this.setTimer(1000);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const modal = this.state.showModal ? (
      <ModalContainer onClick={this.handleHide}>
        <ModalContent>{this.state.content}</ModalContent>
      </ModalContainer>
    ) : (
      ''
    );
    return ReactDOM.createPortal(modal, this.el);
  }
}

export default Modal;
