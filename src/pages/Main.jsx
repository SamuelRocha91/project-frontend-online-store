import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Search from '../components/Search';

class Main extends Component {
  state = {};

  componentDidMount() {
    getCategories().then((data) => this.setState({ categorie: data }));
  }

  render() {
    const { categorie } = this.state;
    return (
      <>
        <nav>
          {categorie && categorie.map(((categ) => (
            <button
              key={ categ.id }
              type="button"
              data-testid="category"
            >
              {categ.name}
            </button>
          )))}
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
          <Link data-testid="shopping-cart-button" to="/shoppingcart"> Carrinho </Link>
        </nav>
        <Search />
      </>
    );
  }
}

export default Main;
