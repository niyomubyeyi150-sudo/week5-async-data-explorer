
/**
 * Question 1: Format a number as US dollars.
 */
export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

/**
 * Question 2: Calculate the average product price using reduce().
 */
export function calculateAveragePrice(products) {
  if (products.length === 0) {
    return 0
  }

  const total = products.reduce((sum, product) => {
    return sum + product.price
  }, 0)

  return total / products.length
}

/**
 * Question 3: Filter products by search text and category.
 */
export function filterProducts(products, search, category) {
  const searchTerm = search.trim().toLowerCase()

  return products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm)

    const matchesCategory =
      category === 'all' || product.category === category

    return matchesSearch && matchesCategory
  })
}

/**
 * Question 4: Sort products without changing the original array.
 */
export function sortProducts(products, sortOption) {
  if (sortOption === 'price-asc') {
    return products.toSorted((a, b) => a.price - b.price)
  }

  if (sortOption === 'price-desc') {
    return products.toSorted((a, b) => b.price - a.price)
  }

  if (sortOption === 'name') {
    return products.toSorted((a, b) =>
      a.title.localeCompare(b.title)
    )
  }

  return [...products]
}
