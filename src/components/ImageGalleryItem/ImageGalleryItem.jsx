import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, ImageGalleryItemImg } from './Styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    const { webformatURL, tags, id, largeImageURL } = this.props.image;
    return (
      <ImageGalleryItemStyled>
        <ImageGalleryItemImg
          onClick={this.toggleModal}
          src={webformatURL}
          alt={tags}
          id={id}
        />

        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            closeModal={this.toggleModal}
            tags={tags}
          />
        )}
      </ImageGalleryItemStyled>
    );
  }
}

ImageGalleryItem.protoTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
