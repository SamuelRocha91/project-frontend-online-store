import React, { Component } from 'react';
import propTypes from 'prop-types';

class Assessments extends Component {
  render() {
    const { email, nota, comments } = this.props;
    return (
      <div className="comments-card">
        <div className="shadow-sm card-child">
          <div className="card-body w-100 h-100">
            <h5 className="card-title text-center">Avaliação</h5>
            <p className="section-assessments">
              <strong>Email:</strong>
              <span data-testid="review-card-email">{email}</span>
            </p>
            <p className="section-assessments">
              <strong>Nota:</strong>
              <span data-testid="review-card-rating">{nota}</span>
            </p>
            <p className="section-assessments">
              <strong>Comentário:</strong>
              <span>{comments}</span>
            </p>
          </div>
        </div>
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
