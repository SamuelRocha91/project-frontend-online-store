import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Search from '../components/Search';
import Header from '../components/Header';

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

  handleChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

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
      getProductsFromCategoryAndQuery(identifier, query)
        .then((response) => this.setState({ products: response.results }));
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <>
        <Header />
        <spam className="main">
          <nav className="categories">
            <ul className="categories">
            <h1 className="categories">Categorias</h1>
            <hr width="220px" align='left'/>
              {categories && categories.map((({ id, name }) => (
                <li>
                  <button
                    className="categories"
                    key={ id }
                    type="button"
                    data-testid="category"
                    onClick={ () => this.handleClick(id, undefined) }
                  >
                    {name}
                  </button>
                </li>
              )))}
            </ul>
          </nav>
          <div className="main-search">
            <p
              className="categories"
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <Search
              { ...this.state }
              handleClick={ this.handleClick }
              handleChange={ this.handleChange }
            />
          </div>
        </spam>
      </>
    );
  }
}

export default Main;
