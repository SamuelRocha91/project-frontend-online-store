import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Search from '../components/Search';

class Main extends Component {
  state = {
    categories: [],
    categorie: '',
    products: [],
  };

  componentDidMount() {
    getCategories().then((data) => this.setState({ categories: data }));
  }

  handleClick = (id) => {
    console.log(id);
    getProductsFromCategoryAndQuery(id, undefined)
      .then((response) => this.setState({ products: response.results }));
  };

  changeState = (results) => {
    this.setState({ products: results });
  };

  render() {
    const { categories } = this.state;
    const { products } = this.state;
    console.log(products);
    return (
      <>
        <nav>
          {categories && categories.map((({ id, name }) => (
            <button
              key={ id }
              type="button"
              data-testid="category"
              onClick={ () => this.handleClick(id) }
            >
              {name}
            </button>
          )))}
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        </nav>
        <Search changeState={ this.changeState } { ...this.state } />
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          About
        </Link>
      </>
    );
  }
}

export default Main;
