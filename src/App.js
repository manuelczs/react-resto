import React, { Component } from 'react';
import { DISHES } from './shares/dishes';
import Main from './components/MainComponent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div className="App">
        <Main dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
