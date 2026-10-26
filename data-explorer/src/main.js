import './style.css'
import { getProducts, getCategories, getProduct } from './api.js'
import {calculateAveragePrice,filterProducts,sortProducts,} from './utils.js'
import {showLoading,showError,renderProducts,renderStats,showProductDetailsLoading,renderProductDetails,showProductDetailsError,} from './render.js'

const state = {
  products: [],categories: [],search: '',category: 'all',sort: 'default',
}

const searchInput = document.querySelector('#search')
const categoryFilter = document.querySelector('#category-filter')
const sortSelect = document.querySelector('#sort')
const retryButton = document.querySelector('#retry-button')
const productList = document.querySelector('#product-list')

function updateProductsView() {
  let products = filterProducts( state.products,state.search,state.category)
      products = sortProducts(products, state.sort)
      renderProducts(products, state.products.length)
}

async function loadProducts() {
  showLoading()

  try {
    const [products, categories] = await Promise.all([
      getProducts(),
      getCategories(),
    ])

    state.products = products
    state.categories = categories

    categoryFilter.replaceChildren()

    const allOption = document.createElement('option')
    allOption.value = 'all'
    allOption.textContent = 'All categories'
    categoryFilter.append(allOption)

    categories.forEach((categoryName) => {
      const option = document.createElement('option')
      option.value = categoryName
      option.textContent = categoryName
      categoryFilter.append(option)
    })

    const average = calculateAveragePrice(products)
    renderStats(products, average)

    updateProductsView()
  } catch (error) {
    showError(`Unable to load products. ${error.message}`)
  }
}

async function loadProductDetails(id) {
  showProductDetailsLoading()

  try {
    const product = await getProduct(id)
    renderProductDetails(product)
  } catch (error) {
    showProductDetailsError(
      `Unable to load product details. ${error.message}`
    )
  }
}

searchInput.addEventListener('input', (event) => {
  state.search = event.target.value
  updateProductsView()
})

categoryFilter.addEventListener('change', (event) => {
  state.category = event.target.value
  updateProductsView()
})

sortSelect.addEventListener('change', (event) => {
  state.sort = event.target.value
  updateProductsView()
})

retryButton.addEventListener('click', loadProducts)

productList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-product-id]')

  if (!button) return

  loadProductDetails(Number(button.dataset.productId))
})

loadProducts()