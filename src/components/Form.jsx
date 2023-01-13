import React, { Component } from 'react';
import propTypes from 'prop-types';

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
      validade: false,
    });
  };

  saveAvaliations = (event) => {
    event.preventDefault();
    const { id, addComments } = this.props;
    const { email, nota, comments } = this.state;
    const validation = this.verifyValidade();
    if (!email.includes('@') || !nota) {
      this.setState({
        email: '',
        comments: '',
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

  verifyValidade = () => {
    const { nota, email, comments } = this.state;
    const maxNumber = 5;
    const validNota = Number(nota) >= 1 && Number(nota) <= maxNumber;
    // const validComments = comments.length > 0;
    // const regularExpression = /\S+@\S+\.\S+/;
    const validEmail = email.includes('@');
    return validNota && validEmail;
  };

  render() {
    const { email, comments, nota, validade } = this.state;
    return (
      <form>
        <input
          data-testid="product-detail-email"
          type="text"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ this.changeState }
        />
        <label htmlFor="nota">
          Nota:
          <input
            type="radio"
            name="nota"
            value="1"
            data-testid="1-rating"
            onChange={ this.handleChange }
          />
          1
          <input
            type="radio"
            name="nota"
            value="2"
            data-testid="2-rating"
            onChange={ this.changeState }
          />
          2
          <input
            type="radio"
            name="nota"
            value="3"
            data-testid="3-rating"
            onChange={ this.changeState }
          />
          3
          <input
            type="radio"
            name="nota"
            value="4"
            data-testid="4-rating"
            onChange={ this.changeState }
          />
          4
          <input
            type="radio"
            name="nota"
            value="5"
            data-testid="5-rating"
            onChange={ this.changeState }
          />
          5
        </label>
        <textarea
          data-testid="product-detail-evaluation"
          name="comments"
          id="comentarios"
          cols="30"
          rows="10"
          placeholder="Mensagem (opcional)"
          onChange={ this.changeState }
          value={ comments }
        />
        <button
          data-testid="submit-review-btn"
          type="submit"
          onClick={ this.saveAvaliations }
        >
          Avaliar
        </button>
        {validade && <p data-testid="error-msg">Campos inválidos</p>}
      </form>
    );
  }
}

Form.propTypes = {
  id: propTypes.string.isRequired,
};

export default Form;
