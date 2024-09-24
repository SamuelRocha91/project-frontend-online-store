import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../redux/actions';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Search from '../components/Search';
import HeaderComponent from '../components/Header';

class Main extends Component {
  state = {
    categories: [],
    products: [],
    identifier: '',
    query: '',
  };

  componentDidMount() {
    getCategories().then((data) => this.setState({ categories: data }));
    const getItem = JSON.parse(localStorage.getItem(CART_KEY) || []);
    addToCart(getItem);
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
        <HeaderComponent />
        <span className="spam-main">
          <nav className="nav-categories">
            <ul className="ul-categories">
              <h1 className="h1-categories">Categorias</h1>
              <hr width="220px" align="left" />
              {categories && categories.map((({ id, name }) => (
                <li key={ id }>
                  <button
                    className="button-categories"
                    type="button"
                    onClick={ () => this.handleClick(id, undefined) }
                  >
                    {name}
                  </button>
                </li>
              )))}
            </ul>
          </nav>
          <div className="div-main-search">
            <p
              className="p-categories"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <Search
              { ...this.state }
              handleClick={ this.handleClick }
              handleChange={ this.handleChange }
            />
          </div>
        </span>
      </>
    );
  }
}

Main.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  addToCart,
  removeToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
