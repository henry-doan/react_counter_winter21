import { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  // super old 
  // constructor(props) {
  //   super(props)
  //   this.state = { counterVal: 0 }
      // this.inc = this.inc.bind(inc)
      // this.dec = this.dec.bind(dec)
  // }
  //  old way
  // state = { counterVal: 0, counterName: "my"  }

  // super old
  // inc(){

  // }

  // dec() {

  // }

  // old way 
  // inc = () => {
  //   // this wont work
  //   // this.state.counterVal = 1
  //   this.setState({ counterVal: this.state.counterVal + 1})
  // }

  // dec = () => {
  //   this.setState({ counterVal: this.state.counterVal - 1})
  // }


  render() {
    // const { counterVal, counterName } = this.state
    // const counterVal = this.state.counterVal
    // const counterName = this.state.counterName
    return (
      <>
        {/* <h1>{this.state.counterName} Counter Example</h1> */}
        {/* <h1>{counterName} Counter Example</h1> */}
        {/* <p> */}
          {/* {this.state.counterVal} */}
          {/* {counterVal} */}
        {/* </p> */}
        {/* <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button> */}

        <Counter name="bob" mainColor="blue" />
        <Counter name="jill" mainColor="pink"/>
        <Counter name="mike" mainColor="red" />
        <Counter name="lucy" mainColor="orange"/>
        <Counter />
      </>
    )
  }
}

export default App;
