import React from 'react';
import {Helmet} from 'react-helmet';
import L from '../../locales/ConferenceCalling';

const ConferenceCalling = props => {
  L.setLanguage(props.match.params.lang);
  return (
    <div>
      <Helmet title={L.KEY_1} />
      <h1>{L.KEY_1}</h1>
      {L.KEY_2}
    </div>
  )
};

export default ConferenceCalling;
