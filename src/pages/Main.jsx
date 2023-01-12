import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Search from '../components/Search';

class Main extends Component {
  state = {
    categories: [],
    products: [],
    identifier: '',
    query: '',
  };

  componentDidMount() {
    getCategories().then((data) => this.setState({ categories: data }));
  }

  handleClick = (id, word) => {
    if (word === undefined) {
      const { query } = this.state;
      return this.setState({ identifier: id }, () => {
        const { identifier } = this.state;
        getProductsFromCategoryAndQuery(identifier, query)
          .then((response) => this.setState({ products: response.results }));
      });
    }
    this.setState({ identifier: id, query: word }, () => {
      const { identifier, query } = this.state;
      console.log(query);
      getProductsFromCategoryAndQuery(identifier, query)
        .then((response) => this.setState({ products: response.results }));
    });
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
              onClick={ () => this.handleClick(id, undefined) }
            >
              {name}
            </button>
          )))}
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        </nav>
        <Search
          changeState={ this.changeState }
          { ...this.state }
          handleClick={ this.handleClick }
        />
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
