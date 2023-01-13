import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonReturn extends Component {
  render() {
    return (
      <Link
        to="/"
      >
        <img
          className="img-return-btn"
          src="https://img.icons8.com/ios-filled/50/null/down-left.png"
          alt="Icone de retorno"
        />
      </Link>
    );
  }
}

export default ButtonReturn;
