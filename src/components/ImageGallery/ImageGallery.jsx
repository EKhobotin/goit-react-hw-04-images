import React from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesList, onClick }) => {
  const onClickImage = largeURL => {
    onClick(largeURL);
  };

  return (
    <Gallery>
      {imagesList.map(el => {
        return (
          <ImageGalleryItem
            key={el.id}
            tags={el.tags}
            url={el.webformatURL}
            largeURL={el.largeImageURL}
            onClick={onClickImage}
          />
        );
      })}
    </Gallery>
  );
};

// export class ImageGallery extends Component {
//   onClick = largeURL => {
//     // console.log(largeURL);
//     this.props.onClick(largeURL);
//   };
//   render() {
//     // console.log(this.props);
//     return (
//       <Gallery>
//         {this.props.imagesList.map(el => {
//           return (
//             <ImageGalleryItem
//               key={el.id}
//               tags={el.tags}
//               url={el.webformatURL}
//               largeURL={el.largeImageURL}
//               onClick={this.onClick}
//             />
//           );
//         })}
//       </Gallery>
//     );
//   }
// }
