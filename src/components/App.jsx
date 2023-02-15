import React from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar>Header</Searchbar>
      <ImageGallery>
        <Loader></Loader>
        <ImageGalleryItem>
          <Modal></Modal>
        </ImageGalleryItem>
      </ImageGallery>
      <Button></Button>
    </div>
  );
};
