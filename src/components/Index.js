import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

const Index = props => {
  return (
    <div>
      <Helmet title="choose language" />
      <h2>Chose a language</h2>
      <ul>
        <li><Link to="/en">English</Link></li>
        <li><Link to="/fr">French</Link></li>
      </ul>
    </div>
  )
}

export default Index;
