import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { requestImg } from 'services/api';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: null,
    currentImg: null,
    totalImg: 0,
    isLoading: false,
    error: null,
    per_page: 12,
  };

  async componentDidUpdate(_, prevState) {
    const { query, per_page, page } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      try {
        const response = await requestImg(query, page, per_page);

        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          totalImg: response.totalHits,
        }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handleSubmit = name => {
    this.setState({ query: name, page: 1, images: [] });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images}></ImageGallery>
        {this.state.images.length > 0 &&
          this.state.page <
            Math.ceil(this.state.totalImg / this.state.per_page) && (
            <Button onClick={this.handleLoadMore} />
          )}
      </div>
    );
  }
}
