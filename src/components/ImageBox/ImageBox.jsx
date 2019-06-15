import './ImageBox.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LikesComments } from '../LikesComments';

export class ImageBox extends Component {
  render() {
    const { image, likes, comments } = this.props;
    return (
      <div className="gallery-item" tabIndex="0">
        <img src={image} className="gallery-image" alt="" />
        <LikesComments likes={likes} comments={comments} />
      </div>
    );
  }
}
ImageBox.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};