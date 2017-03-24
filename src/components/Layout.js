import React from 'react';
import {Link} from 'react-router-dom';
import L from '../locales/Layout';
import R from '../locales/Route';

const Layout = props => {

  try {
    L.setLanguage(props.match.params.lang);
    R.setLanguage(props.match.params.lang);
  } catch (e) { }

  return (
    <div>
      <header>
        <h1>{L.KEY_1}</h1>
      </header>
      <navigation>
        <ul>
          <li><Link to={R.HOME.link}>{R.HOME.text}</Link></li>
          <li><Link to={R.CONFERENCE_CALL.link}>{R.CONFERENCE_CALL.text}</Link></li>
          <li><Link to={R.CONTACT.link}>{R.CONTACT.text}</Link></li>
        </ul>
      </navigation>
      <main>
        {props.children}
      </main>
      <footer>
        {L.KEY_2}
      </footer>
    </div>
  )
};

export default Layout;
