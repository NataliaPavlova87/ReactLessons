import './ProfileBio.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class ProfileBio extends Component {
  render() {
    const {name} = this.props;
    return (
        <div className='profile-bio'>
        <p><span className='profile-real-name'>{name}</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit
          📷✈️🏕️</p>
      </div>
    );
  }
}
ProfileBio.propTypes = {
    name: PropTypes.string.isRequired,
};