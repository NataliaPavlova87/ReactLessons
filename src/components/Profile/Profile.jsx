import './Profile.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProfileImage } from '../ProfileImage';
import { ProfileSettings } from '../ProfileSettings';
import { ProfileStats } from '../ProfileStats';
import { ProfileBio } from '../ProfileBio';



export class Profile extends Component {
  render() {
    const {image, nickname, posts, followers, following, name} = this.props;
    return (
        <div className='container'>
        <div className='profile'>
          <ProfileImage image={image} />
          <ProfileSettings nickname={nickname} />
          <ProfileStats posts={posts} followers={followers} following={following} />
          <ProfileBio name={name} />
        </div>
      </div>
    );
  }
}
Profile.propTypes = {
  image: PropTypes.string,
  nickname: PropTypes.string,
  posts: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
};