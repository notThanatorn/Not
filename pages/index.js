import * as React from "react";
import Head from "next/head";

class index extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     someState: "some state",
  //   };

  //   this.changeSomething = this.changeSomething.bind(this);
  // }
  


  state = {
    num: 0 ,
  };

  increaseNumber = () => {
    console.log("Button was clicked");
    if(this.state.num<100){
     this.setState({ num: this.state.num + 1 })
    }
  };
  
  decreaseNumber = () => {
    console.log("Button was clicked");
    if(this.state.num>0){
      this.setState({ num: this.state.num - 1 })
    }
  };
  
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>The Number</title>
        </Head>
        <p>Number Change</p>
        <div>
          <button type="button" onClick={this.decreaseNumber}>
            -
          </button>
          <input type = "text" value = {this.state.num}></input>
          <button type="button" onClick={this.increaseNumber}>
            +
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default index;