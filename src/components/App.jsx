import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { getImages } from 'helper/API';

export class App extends Component {
  state = {
    imagesList: [],
    isLoading: false,
    isModal: false,
    // isLoadMore: false,
    value: '',
    page: 1,
    largeURL: '',
  };

  componentDidMount() {
    // console.log('DidMount');
  }

  async componentDidUpdate(_, prevState) {
    const { value, page } = this.state;
    // console.log('update');
    // console.log(prevState);
    // console.log(this.state);

    if (!value) {
      Notiflix.Notify.warning('Please enter search query');
    }

    if (prevState.value !== value) {
      this.setState({ isLoading: true });
      const images = await getImages(value, page).then(data => data.hits);
      this.setState({ imagesList: images, isLoading: false }, () => {
        if (this.state.imagesList.length === 0) {
          Notiflix.Notify.failure(
            'Nothing found, please enter another search query'
          );
        }
      });
    } else {
      if (prevState.page < page) {
        this.setState({ isLoading: true });
        const images = await getImages(value, page).then(data => data.hits);
        this.setState(prevState => ({
          imagesList: [...prevState.imagesList, ...images],
          isLoading: false,
        }));
      }
    }
  }

  getSearchQuery = value => {
    this.setState({ value, page: 1 });
  };

  handleLoadMore = () => {
    // console.log('LoadMore');
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  pressEscCloseModal = e => {
    if (e.code === 'Escape') {
      this.setState({ isModal: false });
      // this.closeModal();
      window.removeEventListener('keydown', this.pressEscCloseModal);
    }
  };

  openModal = largeURL => {
    this.setState({ largeURL, isModal: true });
    window.addEventListener('keydown', this.pressEscCloseModal);
  };

  render() {
    // console.log('render');
    // getImages('cat').then(data => {
    //   this.setState({ imagesList: data.hits });
    // });

    const { isLoading, isModal, imagesList, largeURL } = this.state;

    // console.log(imagesList.length);
    return (
      <>
        <Searchbar onSubmit={this.getSearchQuery} />
        <ImageGallery
          imagesList={this.state.imagesList}
          onClick={this.openModal}
        />
        {imagesList.length > 0 && <Button onClick={this.handleLoadMore} />}
        {isLoading && <Loader />}
        {isModal && (
          <Modal
            url={largeURL}
            onClick={() => this.setState({ isModal: false })}
          />
        )}
      </>
    );
  }
}
