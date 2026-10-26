
const BASE_URL = 'https://dummyjson.com'
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
export async function getProducts() {
  const data = await getJSON(`${BASE_URL}/products?limit=100`)
  return data.products
}
export async function getCategories() {
  return getJSON(`${BASE_URL}/products/category-list`)
}
export async function getProduct(id) {
  return getJSON(`${BASE_URL}/products/${id}`)
}
