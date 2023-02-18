import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalStyled } from './Styled';

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.clickOnEsc);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.clickOnEsc);
  };
  clickOnEsc = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  clickOnBackDrop = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props;
    console.log(largeImageURL, tags);
    return (
      <ModalOverlay onClick={this.clickOnBackDrop}>
        <ModalStyled>
          <img src={largeImageURL} alt={tags} />
        </ModalStyled>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
