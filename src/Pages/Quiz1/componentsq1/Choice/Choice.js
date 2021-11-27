import styles from './Choice.module.css';
import React, { Component } from 'react';
import { useState } from 'react';



function Choice() {
/*
  constructor(props) {
    super(props);
    this.state = { background: '#828282', textColor: 'white' };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = () => {
    this.setState({
        background: "#dc143c";
    })
  }

  const [ backgroundIsOpen, setBackground ] = useState("#828282");

  function wrongHandler() {
    setBackground("#dc143c")
  }
*/

  return (
    <div>
      {/*<button style={{ backgroundColor: this.state.background, color: this.state.textColor }}
      onClick={this.changeColor} className='btnA'}
      onClick={this.changeColor}>
      A
      </button>*/}
      <button className={styles.btnA}>A</button>
      <button className={styles.btnB}>B</button>
    </div>
  );
}

export default Choice;
