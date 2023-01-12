import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <Link
        to={ `/details/${id}` }
        data-testid="product-detail-link"
      >
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </Link>
    );
  }
}

Card.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
