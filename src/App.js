import React, { Fragment } from 'react';
import './App.css';
import { LoaderSpinner, ErrorAlert } from './components/Exceptions/Exceptions';
import Gallery from './components/Gallery/Gallery';
import TumbnailGrid from './components/TumbnailGrid/TumbnailGrid';
import { IMAGES_API } from './constants/api';
import useFetch from './hooks/useFetch';

function App() {
  const { data, error, isLoading } = useFetch(IMAGES_API);

  if (isLoading) {
    return <LoaderSpinner />
  }

  if (error) {
    return <ErrorAlert error={error} />
  }

  return (
    <div className="app-container">
      <h1 className="header">Gallery</h1>
      {data &&
        <Fragment>
          <Gallery images={data} />
          <TumbnailGrid images={data} />
        </Fragment>
      }
    </div>
  );
}

export default App;
