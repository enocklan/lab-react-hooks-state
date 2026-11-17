
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  function addToCart(product) {
    setCart([...cart, product])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <br />

      <label htmlFor="category-filter">Filter by Category: </label>

      <select
        id="category-filter"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App
