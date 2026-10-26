# Mini Shop Catalogue 🛍️

**Developer:** NIYOMUBYEYI Nadine  
**Project:** Mini Shop Catalogue  
**API:** [DummyJSON Products API Documentation](https://dummyjson.com/docs/products)  
**API Endpoint:** https://dummyjson.com/products

## 🔗 Project Links

- **Live Demo:** https://week5-async-data-explorer.vercel.app
- **Demo Video:** Add your demonstration video link.
- **GitHub Repository:** Add your repository link.

## 📖 About the Project

Mini Shop Catalogue is a responsive web application that displays product information retrieved from the DummyJSON Products API. Users can explore a catalogue of products organized into categories.

This project was developed to practice asynchronous JavaScript, fetching API data, managing application state, and dynamically rendering product information.

## ✨ Features

Mark each feature as complete only after confirming it works in your application.

- [x] Fetch product data from the DummyJSON API.
- [x] Display product information from the API.
- [ ] Display product categories and filter products by category.
- [ ] Search for products by name.
- [ ] Sort products by price or name.
- [ ] Display loading, success, empty, and error states.
- [ ] Provide a retry option when an API request fails.
- [ ] Use a responsive layout for mobile, tablet, and desktop screens.

### 🎁 Bonus Features

Mark these as complete only if you implemented them.

- [ ] Pagination or load-more functionality.
- [ ] Product detail view.
- [ ] Additional sorting or filtering options.
- [ ] Favorites or shopping cart functionality.

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS v4
- JavaScript (ES Modules)
- Vite
- DummyJSON Products API

## 🌐 API Information

This project uses the [DummyJSON Products API](https://dummyjson.com/docs/products) to retrieve sample product data.

Main endpoints:

- All products: `https://dummyjson.com/products`
- Product categories: `https://dummyjson.com/products/categories`
- Products in a category: `https://dummyjson.com/products/category/smartphones`
- Search products: `https://dummyjson.com/products/search?q=phone`

## 🧠 Application State

The exact state shape should match the variables used in `src/main.js`. A possible example is:

```js
const state = {
  products: [],
  categories: [],
  search: '',
  selectedCategory: 'all',
  sort: 'default',
  loading: false,
  error: null,
}
```

- `products` stores the products returned by the API.
- `categories` stores the available product categories.
- `search` stores the user's search text.
- `selectedCategory` stores the selected category.
- `sort` stores the chosen sorting option.
- `loading` indicates whether data is being fetched.
- `error` stores an error message if a request fails.

*This is an example state shape. Update it to match your actual code.*

### State-to-Render Flow

1. **Fetch:** JavaScript requests product and category data from the DummyJSON API.
2. **Store:** The returned data is saved in the application state.
3. **Process:** The application applies search, category filtering, and sorting if those features are implemented.
4. **Render:** JavaScript updates the DOM to display the products.
5. **Handle states:** The interface displays loading, success, empty, or error feedback as appropriate.
6. **Respond to interactions:** When the user searches or selects a category, the displayed catalogue is updated.

## 📦 Example of Raw API JSON

This is a shortened example of the product data returned by the API:

```json
{
  "products": [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "A sample product description",
      "category": "beauty",
      "price": 9.99,
      "rating": 4.94,
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    }
  ],
  "total": 194,
  "skip": 0,
  "limit": 30
}
```

The values above illustrate the response structure; the actual API response may contain different products or values.

## 🔄 How the API Data Is Transformed

The API returns an object containing a `products` array and pagination information. The application extracts the products array and uses JavaScript to create product cards.

For example:

- `title` becomes the product name shown on the card.
- `price` is formatted and displayed as the product price.
- `description` provides a short explanation of the product.
- `category` identifies the product's category.
- `thumbnail` supplies the product image.
- `rating` can be displayed as a product rating if included in the design.

The resulting product data is rendered into HTML elements and displayed on the page.

## 📸 Screenshots

Save your real application screenshots in a `screenshots` folder in the project root.

### Loading State

![Loading state](screenshots/loading.png)

Shows the interface while product data is being fetched.

### Success State

![Success state](screenshots/success.png)

Shows the loaded product catalogue with product cards.

### Empty State

![Empty state](screenshots/empty.png)

Shows the message displayed when no products match the search or selected category.

### Error State

![Error state](screenshots/error.png)

Shows the error message displayed when the API request fails.

**Note:** These are placeholder paths. Capture the actual states from your application and save the screenshots with the matching filenames. Implement any missing state before marking it complete.

## 📚 What I Learned About Async JavaScript

During this project, I learned how asynchronous JavaScript helps retrieve data from an external API without blocking the page. I practiced using `fetch()` to send requests to the DummyJSON Products API. I learned how `async` and `await` make asynchronous code easier to read and manage. I also learned to convert API responses into JavaScript objects using `response.json()`. Using `try...catch` helped me understand how to handle errors when requests fail. I practiced taking the returned product data and displaying it dynamically in the DOM. This project helped me understand how API requests, application state, and rendering work together in a frontend application.

## 🚀 How to Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm

### Installation

1. Clone your repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to your project folder:

   ```bash
   cd data-explorer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the Vite development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal, usually `http://localhost:5173`.

Replace the repository URL and folder name with your actual values.

An API key is not required for the endpoints used in this project. An internet connection is needed to load product data.


