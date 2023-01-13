import React, { Component } from 'react';
import propTypes from 'prop-types';

class Assessments extends Component {
  render() {
    const { email, nota, comments } = this.props;
    return (
      <div>
        <p data-testid="review-card-email">{ email }</p>
        <p data-testid="review-card-rating">{ nota }</p>
        <p data-testid="review-card-evaluation">{ comments }</p>
      </div>
    );
  }
}

Assessments.propTypes = {
  email: propTypes.string.isRequired,
  nota: propTypes.string.isRequired,
  comments: propTypes.string.isRequired,
};

export default Assessments;
