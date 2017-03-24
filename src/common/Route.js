import React from 'react';
import {Route as RouterRoute} from 'react-router-dom';
import Layout from '../components/Layout';

const Route = ({component: Component, ...rest}) => {
  const paths = typeof rest.path === 'string' ? [rest.path] : rest.path;
  const props = Object.assign(rest);
  delete props.path;

  return (
    <div>
    {paths.map((path, i) => (
        <RouterRoute key={i} path={path} {...props} render={matchProps => (
          <Layout {...matchProps}>
            <Component {...matchProps} />
          </Layout>
        )} />
      )
    )}
    </div>
  )
};

export default Route;
