import './Gallery.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageBox } from '../ImageBox';

export class Gallery extends Component {
  render() {
    const { pictures } = this.props;
    return (
        <div className='gallery'>
        {pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)}
        </div>
    );
  }
}
Gallery.propTypes = {
    pictures: PropTypes.array.isRequired,
  };