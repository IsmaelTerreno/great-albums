import React, { Component } from 'react';
import './App.scss';
import Albums from "./Albums";
import PropTypes from 'prop-types';

class App extends Component{

  componentWillMount() {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;
    return (
        <div className="App">
          <h1>Last 3 Albums with newest photos</h1>
          <Albums
              items={albums}
          />
        </div>
    );
  }
}

App.propTypes = {
  albums: PropTypes.array,
  loadAlbums: PropTypes.func,
};

export default App;
