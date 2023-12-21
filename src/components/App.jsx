import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { getImages } from 'helper/API';

export const App = () => {
  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState();
  const [page, setPage] = useState(1);
  const [largeURL, setLargeURL] = useState('');

  useEffect(() => {
    if (value) {
      fetchData(value, page);
    }
  }, [value, page]);

  const fetchData = async (value, page) => {
    setIsLoading(true);
    const images = await getImages(value, page);
    if (!images.hits.length) {
      Notiflix.Notify.failure(
        'Nothing found, please enter another search query'
      );
    }
    page === 1
      ? setImagesList(images.hits)
      : setImagesList(prevState => [...prevState, ...images.hits]);
    setIsLoading(false);
  };
  const getSearchQuery = value => {
    setValue(value);
    if (!value) {
      Notiflix.Notify.warning('Please enter search query');
    }
    setPage(1);
  };
  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  const pressEscCloseModal = e => {
    if (e.code === 'Escape') {
      setIsModal(false);
      window.removeEventListener('keydown', pressEscCloseModal);
    }
  };
  const openModal = largeURL => {
    setLargeURL(largeURL);
    setIsModal(true);
    window.addEventListener('keydown', pressEscCloseModal);
  };

  return (
    <>
      <Searchbar onSubmit={getSearchQuery} />
      <ImageGallery imagesList={imagesList} onClick={openModal} />
      {imagesList.length > 0 && <Button onClick={handleLoadMore} />}
      {isLoading && <Loader />}
      {isModal && <Modal url={largeURL} onClick={() => setIsModal(false)} />}
    </>
  );
};

// export class App extends Component {
//   state = {
//     imagesList: [],
//     isLoading: false,
//     isModal: false,
//     value: '',
//     page: 1,
//     largeURL: '',
//   };

//   componentDidMount() {
//     // console.log('DidMount');
//   }

//   async componentDidUpdate(_, prevState) {
//     const { value, page } = this.state;
//     // console.log('update');
//     // console.log(prevState);
//     // console.log(this.state);

//     if (!value) {
//       Notiflix.Notify.warning('Please enter search query');
//     }

//     if (prevState.value !== value) {
//       this.setState({ isLoading: true });
//       const images = await getImages(value, page).then(data => data.hits);
//       this.setState({ imagesList: images, isLoading: false }, () => {
//         if (this.state.imagesList.length === 0) {
//           Notiflix.Notify.failure(
//             'Nothing found, please enter another search query'
//           );
//         }
//       });
//     } else {
//       if (prevState.page < page) {
//         this.setState({ isLoading: true });
//         const images = await getImages(value, page).then(data => data.hits);
//         this.setState(prevState => ({
//           imagesList: [...prevState.imagesList, ...images],
//           isLoading: false,
//         }));
//       }
//     }
//   }

//   getSearchQuery = value => {
//     this.setState({ value, page: 1 });
//   };

//   handleLoadMore = () => {
//     // console.log('LoadMore');
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   pressEscCloseModal = e => {
//     if (e.code === 'Escape') {
//       this.setState({ isModal: false });
//       // this.closeModal();
//       window.removeEventListener('keydown', this.pressEscCloseModal);
//     }
//   };

//   openModal = largeURL => {
//     this.setState({ largeURL, isModal: true });
//     window.addEventListener('keydown', this.pressEscCloseModal);
//   };

//   render() {
//     const { isLoading, isModal, imagesList, largeURL } = this.state;
//     return (
//       <>
//         <Searchbar onSubmit={this.getSearchQuery} />
//         <ImageGallery
//           imagesList={this.state.imagesList}
//           onClick={this.openModal}
//         />
//         {imagesList.length > 0 && <Button onClick={this.handleLoadMore} />}
//         {isLoading && <Loader />}
//         {isModal && (
//           <Modal
//             url={largeURL}
//             onClick={() => this.setState({ isModal: false })}
//           />
//         )}
//       </>
//     );
//   }
// }
