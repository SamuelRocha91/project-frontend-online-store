const categoriesURL = 'https://api.mercadolibre.com/sites/MLB/categories';
// const categorieQueryURL = ;

export const fetchProductsList = (filter) => new Promise((resolve, reject) => {
  if (filter) {
    resolve(fetch(`${productsListURL}${filter}`)
      .then((response) => response.json())
      .then((data) => data.results));
  }
  reject(new Error('Termo de busca não informado'));
});

export async function getCategories() {
  return fetch(categoriesURL)
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId || query) {
    const categorieQueryURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
    return fetch(categorieQueryURL)
      .then((response) => response.json());
  }
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
