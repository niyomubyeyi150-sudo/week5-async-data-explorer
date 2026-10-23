
import { formatPrice } from './utils.js'

// Question 1: Find the main page elements.
const productList = document.querySelector('#product-list')
const statusMessage = document.querySelector('#status-message')
const errorContainer = document.querySelector('#error-container')
const errorMessage = document.querySelector('#error-message')
const totalProducts = document.querySelector('#total-products')
const averagePrice = document.querySelector('#average-price')
const shownProducts = document.querySelector('#shown-products')
const productDialog = document.querySelector('#product-dialog')
const dialogContent = document.querySelector('#dialog-content')

// Question 2: Update the loading message.
export function showLoading() {
  statusMessage.textContent = 'Loading products...'
  errorContainer.classList.add('hidden')
  productList.setAttribute('aria-busy', 'true')
}

// Question 3: Display an error and retry option.
export function showError(message) {
  statusMessage.textContent = 'Products could not be displayed.'
  errorMessage.textContent = message
  errorContainer.classList.remove('hidden')
  productList.setAttribute('aria-busy', 'false')
}

// Question 4: Render product cards safely.
export function renderProducts(products, totalCount) {
  productList.replaceChildren()
  shownProducts.textContent = String(products.length)

  if (products.length === 0) {
    statusMessage.textContent = 'No products match your search or filter.'
    productList.setAttribute('aria-busy', 'false')
    return
  }

  statusMessage.textContent = `Showing ${products.length} products.`

  products.forEach((product) => {
    const card = document.createElement('article')
    card.className =
      'overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md'

    const image = document.createElement('img')
    image.src = product.thumbnail
    image.alt = product.title
    image.loading = 'lazy'
    image.className = 'h-48 w-full bg-stone-100 object-contain p-4'

    const content = document.createElement('div')
    content.className = 'p-5'

    const category = document.createElement('p')
    category.className = 'mb-2 text-xs font-semibold uppercase text-emerald-700'
    category.textContent = product.category

    const title = document.createElement('h2')
    title.className = 'mb-2 text-lg font-semibold'
    title.textContent = product.title

    const price = document.createElement('p')
    price.className = 'mb-4 text-xl font-bold text-slate-900'
    price.textContent = formatPrice(product.price)

    const detailsButton = document.createElement('button')
    detailsButton.type = 'button'
    detailsButton.dataset.productId = String(product.id)
    detailsButton.className =
      'rounded-lg bg-emerald-800 px-4 py-2 font-medium text-white hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2'
    detailsButton.textContent = 'View details'

    content.append(category, title, price, detailsButton)
    card.append(image, content)
    productList.append(card)
  })

  productList.setAttribute('aria-busy', 'false')
}

// Question 5: Display product statistics.
export function renderStats(products, average) {
  totalProducts.textContent = String(products.length)
  averagePrice.textContent = formatPrice(average)
}

// Question 6: Display product details in an accessible dialog.
export function showProductDetailsLoading() {
  dialogContent.replaceChildren()

  const message = document.createElement('p')
  message.textContent = 'Loading product details...'
  dialogContent.append(message)

  if (!productDialog.open) {
    productDialog.showModal()
  }
}

export function renderProductDetails(product) {
  dialogContent.replaceChildren()

  const title = document.createElement('h2')
  title.id = 'dialog-title'
  title.className = 'mb-3 text-2xl font-bold'
  title.textContent = product.title

  const image = document.createElement('img')
  image.src = product.thumbnail
  image.alt = product.title
  image.className = 'mb-4 h-52 w-full object-contain'

  const description = document.createElement('p')
  description.className = 'mb-4 text-slate-600'
  description.textContent = product.description

  const price = document.createElement('p')
  price.className = 'mb-2 text-xl font-bold'
  price.textContent = `Price: ${formatPrice(product.price)}`

  const category = document.createElement('p')
  category.className = 'mb-2 text-sm text-slate-600'
  category.textContent = `Category: ${product.category}`

  const rating = document.createElement('p')
  rating.className = 'text-sm text-slate-600'
  rating.textContent = `Rating: ${product.rating} / 5`

  dialogContent.append(title, image, description, price, category, rating)
}

export function showProductDetailsError(message) {
  dialogContent.replaceChildren()

  const error = document.createElement('p')
  error.className = 'text-red-700'
  error.textContent = message

  dialogContent.append(error)
}
