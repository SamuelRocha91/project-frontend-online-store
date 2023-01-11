const categoriesURL = 'https://api.mercadolibre.com/sites/MLB/categories';
const categorieQueryURL = 'https://api.mercadolibre.com/sites/MLB/search?';

export async function getCategories() {
  return fetch(categoriesURL)
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = `${categorieQueryURL}q=${query}`;
  if (categoryId && query) {
    url = `${categorieQueryURL}category=${categoryId}&q=${query}`;
  } else if (categoryId) {
    url = `${categorieQueryURL}category=${categoryId}`;
  }
  return fetch(url)
    .then((response) => response.json());
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
