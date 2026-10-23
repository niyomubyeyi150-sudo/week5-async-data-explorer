
const BASE_URL = 'https://dummyjson.com'

// Question 1: Fetch JSON data and handle HTTP errors.
export async function getJSON(url) {
  let response

  try {
    response = await fetch(url)
  } catch {
    throw new Error('Network error. Check your internet connection.')
  }

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}

// Question 2: Fetch the product list.
export async function getProducts() {
  const data = await getJSON(`${BASE_URL}/products?limit=100`)
  return data.products
}

// Question 3: Fetch all product categories.
export async function getCategories() {
  return getJSON(`${BASE_URL}/products/category-list`)
}

// Question 4: Fetch one product by its ID.
export async function getProduct(id) {
  return getJSON(`${BASE_URL}/products/${id}`)
}
