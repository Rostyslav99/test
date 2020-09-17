import React, { Component } from 'react';
import Components from './components/index';
import ErrorBoundry from './error-boundry';

import BikesSevice from './service';
import { Bprovider } from './contex';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  bikesSevice = new BikesSevice();
  render() {

    return (
      <Provider store={store}>
        <Bprovider value={this.bikesSevice}>
          <ErrorBoundry>
            <Components />
          </ErrorBoundry>
        </Bprovider>
      </Provider>
    );
  }
}

export default App;
