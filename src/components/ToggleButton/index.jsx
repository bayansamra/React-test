import React, { Component } from 'react'

class ToggleButton extends Component {
  // constructor(){
  //   super();

  //   this.state={
  //     theme:'Light'
  //   };
  // }

 state={
        theme:'light'
      };

      handleToggleTheme=() => {
      // console.log('toggle');
      //  this.setState({theme:'dark'});

      // this.state.theme === "Light" ? this.setState({theme:'dark'}) :this.setState({theme:'Light'});

      this.setState((prevState) => {
         return prevState.theme === "light" ? {theme:'dark'} : {theme:'light'}
      });
    };


  render() {
    return (
    <button className={`toggleButton $ {this.state.theme}`} onClick={this.handleToggleTheme}>
    {this.state.theme === "light"?"dark":"light"}
    </button>
    )
  }
};
export default ToggleButton