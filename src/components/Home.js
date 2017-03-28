import React from 'react';
import { Helmet } from 'react-helmet';
import L from '../locales/Home';

const Home = props => {
  L.setLanguage(props.match.params.lang);
  return (
    <div>
      <Helmet title={L.KEY_1} />
      <h1>{L.KEY_1}</h1>
      {L.KEY_2}
      <p>
        {!props.Home.button ? L.KEY_3 : L.KEY_4}
      </p>
      <input type="button" onClick={props.onButtonClick} value="Button" />
    </div>
  );
};

export default Home;
