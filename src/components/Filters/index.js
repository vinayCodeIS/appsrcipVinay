import React from "react";

export default function Filters({
  categories,
  category,
  setCategory,
  priceFilter,
  setPriceFilter,
  maxPrice,
  sortBy,
  setSortBy,
  products, // full product list
  filteredProducts, // filtered list for total count
}) {
  // Ensure products is defined
  const safeProducts = products || [];

  // count products per category
  const categoryCounts = {};
  safeProducts.forEach((p) => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });

  return (
    <aside className="sidebar" aria-label="Filters">
      <h2 className="filter-title">Filters</h2>

      {/* Total Items */}
      <div className="total-items">
        <strong>Total items: {filteredProducts?.length || 0}</strong>
      </div>

      {/* Category Filter */}
      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All ({safeProducts.length})</option>
          {categories
            .filter((c) => c !== "all")
            .map((c) => (
              <option key={c} value={c}>
                {capitalize(c)} ({categoryCounts[c] || 0})
              </option>
            ))}
        </select>
      </div>

      {/* Price Filter */}
      <div className="filter-group">
        <label htmlFor="priceRange">Max price: ₹{priceFilter}</label>
        <input
          id="priceRange"
          type="range"
          min="0"
          max={maxPrice}
          value={priceFilter || 0}
          onChange={(e) => setPriceFilter(Number(e.target.value))}
        />
      </div>

      {/* Sort */}
      <div className="filter-group">
        <label>Sort</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="alpha">Alphabetical</option>
        </select>
      </div>

      {/* Clear Filters */}
      <div className="filter-group">
        <button
          className="clear-btn"
          onClick={() => {
            setCategory("all");
            setPriceFilter(maxPrice);
            setSortBy("relevance");
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Attribution */}
      <div className="attribution">
        Demo data from <a href="https://fakestoreapi.com/">Fake Store API</a>
      </div>
    </aside>
  );
}

function capitalize(s) {
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
