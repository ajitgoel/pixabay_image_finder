import React, { Component } from 'react';
import AppBar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
            <AppBar/>
            <Search/>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
