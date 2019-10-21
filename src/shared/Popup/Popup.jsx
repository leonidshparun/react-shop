import React, { useEffect } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';

import { hidePopup } from 'store/actions/actions';
import { zIndex, Colors } from 'style/constants';

const PopupWrapper = styled.p`
  z-index: ${zIndex.popup};
  background-color: ${Colors.popupBg};
  position: fixed;
  height: 80px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  button {
    position: absolute;
    top: 0;
    font-size: 20px;
    right: 10px;
  }

  p {
    font-size: 22px;
  }
`;

const PopupConnected = ({ showPopup, message, hide }) => {
  useEffect(() => {
    const timer = setTimeout(hide, 1500);
    return () => {
      clearTimeout(timer);
    };
  });
  return showPopup && <PopupWrapper>{message}</PopupWrapper>;
};

const mapStateToProps = state => ({
  showPopup: state.site.modal.showModal,
  message: state.site.modal.modalrMessage
});

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hidePopup('THANKS'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupConnected);
