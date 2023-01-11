import React, { Component } from 'react';
import { getCategories } from '../services/api';
import Search from '../components/Search';

class Main extends Component {
  state = {
    categories: [],
    categorie: '',
  };

  componentDidMount() {
    getCategories().then((data) => this.setState({ categories: data }));
  }

  handleClick = (id) => {
    this.setState({ categorie: id });
  };

  render() {
    const { categories, categorie } = this.state;
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
        <Search categorie={ categorie } />
      </>
    );
  }
}

export default Main;
