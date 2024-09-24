/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import propTypes from 'prop-types';

const three = 3;
const four = 4;
const five = 5;
const NOTAS = [1, 2, three, four, five];

class Form extends Component {
  state = {
    email: '',
    nota: '',
    comments: '',
    validade: false,
  };

  changeState = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  saveAvaliations = (event) => {
    event.preventDefault();
    const { id, addComments } = this.props;
    const { email, nota, comments } = this.state;
    if (!email.includes('@') || !nota) {
      this.setState({
        validade: true,
      });
    } else {
      this.setState({ email: '', nota: '', comments: '', validade: false }, () => {
        const commentsUser = JSON.parse(localStorage.getItem(id)) || [];
        const newCommentUser = {
          email, nota, comments,
        };
        commentsUser.push(newCommentUser);
        localStorage.setItem(id, JSON.stringify(commentsUser));
        addComments();
      });
    }
  };

  render() {
    const { email, comments, validade } = this.state;
    return (
      <div className="container mt-4">

        <form className="bg-light p-4 border rounded">
          <h2 className="mb-4">Avaliar Produto</h2>
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
              value={ email }
              onChange={ this.changeState }
            />
          </div>
          <div className="form-group mb-4">
            <label className="d-block mb-2">Nota:</label>
            <div className="d-flex justify-content-start">
              {NOTAS.map((notaValue) => (
                <div className="form-check form-check-inline" key={ notaValue }>
                  <input
                    type="radio"
                    name="nota"
                    value={ notaValue }
                    className="form-check-input"
                    data-testid={ `${notaValue}-rating` }
                    onChange={ this.changeState }
                  />
                  <label className="form-check-label" htmlFor={ `nota-${notaValue}` }>
                    {notaValue}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="comments" className="mb-2">Comentários:</label>
            <textarea
              data-testid="product-detail-evaluation"
              name="comments"
              className="form-control"
              rows="4"
              placeholder="Mensagem (opcional)"
              onChange={ this.changeState }
              value={ comments }
            />
          </div>

          <button
            data-testid="submit-review-btn"
            type="submit"
            className="btn btn-primary mt-3"
            onClick={ this.saveAvaliations }
          >
            Avaliar
          </button>
          {validade && (
            <p className="text-danger mt-2">
              Campos inválidos
            </p>)}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  id: propTypes.string.isRequired,
  addComments: propTypes.func.isRequired,
};

export default Form;
