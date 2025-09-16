import React, { Component } from 'react';
import Header from './header';
import Footer from "./footer"

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
        <Footer />
      </div>
    );
  }
}
