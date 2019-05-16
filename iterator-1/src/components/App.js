import React, { Component } from 'react';
import Router from 'components/common/Router';
import GlobalStyles from 'components/common/GlobalStyles';


class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
