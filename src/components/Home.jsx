import React, { Component } from 'react';
import { store } from '../redux/store.js'
import * as action from '../redux/action.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: store.getState()
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        num:  store.getState()
      })
    })
  }
  render() {
    return (
      <div>
        这里是Home组件-----{this.state.num}
        <button onClick={() => {store.dispatch(action.add(1))}}>点我加1</button>
        <button onClick={() => {store.dispatch(action.del(1))}}>点我减1</button>
      </div>
    );
  }
}

export default Home;