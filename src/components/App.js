import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Categories from './Categories';
import ListingsIndex from './ListingsIndex';
import DropdownBarContainer from './DropdownBarContainer';
import ListingsContainer from './ListingsContainer';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <DropdownBarContainer />
            <div className="main-container">
              <div className="main">
                <ListingsContainer />
                <Categories />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
