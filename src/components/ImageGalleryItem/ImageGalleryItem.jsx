import React from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, tags, largeURL, onClick }) => {
  const handleClick = () => {
    // console.log(this.props.largeURL);
    // console.dir(e.target);
    // console.log(e.currentTarget);
    onClick(largeURL);
  };
  return (
    <GalleryItem onClick={handleClick}>
      <GalleryItemImage src={url} alt={tags} />
    </GalleryItem>
  );
};

// export class ImageGalleryItem extends Component {
//   handleClick = () => {
//     // console.log(this.props.largeURL);
//     // console.dir(e.target);
//     // console.log(e.currentTarget);
//     this.props.onClick(this.props.largeURL);
//   };

//   render() {
//     return (
//       <GalleryItem onClick={this.handleClick}>
//         <GalleryItemImage src={this.props.url} alt={this.props.tags} />
//       </GalleryItem>
//     );
//   }
// }
