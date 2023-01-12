const categoriesURL = 'https://api.mercadolibre.com/sites/MLB/categories';
const categorieQueryURL = 'https://api.mercadolibre.com/sites/MLB/search?';
const productURL = 'https://api.mercadolibre.com/items/';

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
  console.log(url);
  return fetch(url)
    .then((response) => response.json());
}

export async function getProductById(product) {
  return fetch(`${productURL}${product}`)
    .then((response) => response.json());
}
