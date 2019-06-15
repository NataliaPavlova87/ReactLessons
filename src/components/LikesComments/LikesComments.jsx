import './LikesComments.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class LikesComments extends Component {

  render() {
    const {likes, comments } = this.props;
    return (
      <div className="gallery-item-info">
        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart"
            aria-hidden="true"></i> {likes}</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment"
            aria-hidden="true"></i> {comments}</li>
        </ul>
      </div>
    );
  }
}
LikesComments.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};