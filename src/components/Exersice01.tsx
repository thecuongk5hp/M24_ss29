import React, { Component } from 'react'

export default class Exersice01 extends Component {
  constructor(props? : any) {
    super(props);
    this.state = {
      userName: 'Nguyễn Thế Cường'
    };
  }

  componentDidMount() {
    console.log('...');
  }
  render() {
    return (
      <div>Exersice01</div>
    )
  }
}
