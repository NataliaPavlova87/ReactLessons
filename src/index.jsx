import './assets/global.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import { Gallery } from './components/Gallery';
import { Profile } from './components/Profile';
import { pictures } from './pictures';
import { profile } from './profile';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
        {profile.map((profile, idx) => <Profile key={idx} {...profile} />)}
        </header>
        <main>
          <div className='container'>
            <Gallery pictures={pictures} />
          </div>
        </main> 
      </Fragment>
    );
  } 
}

ReactDom.render(<App />, document.getElementById('root'));
