import React, { useEffect, useState, useMemo } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [maxPrice, setMaxPrice] = useState(0);
  const [priceFilter, setPriceFilter] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        if (cancelled) return;
        setProducts(data);
        const mx = data.reduce((acc, p) => Math.max(acc, p.price), 0);
        setMaxPrice(Math.ceil(mx));
        setPriceFilter(Math.ceil(mx));
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchProducts();
    return () => (cancelled = true);
  }, []);

  useEffect(() => {
    document.title = "Product Listing — Demo PLP";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Browse our curated demo product list with filters and search."
      );
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = "Browse our curated demo product list with filters and search.";
      document.head.appendChild(m);
    }
  }, []);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(set)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let list = products.slice();
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (priceFilter != null) list = list.filter((p) => p.price <= priceFilter);

    if (sortBy === "low") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "high") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "alpha") list.sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, [products, category, query, sortBy, priceFilter]);

  return (
    <div className="app-root">
      <Header query={query} setQuery={setQuery} />
      <main className="container main-grid" role="main">
        <Filters
          categories={categories}
          category={category}
          setCategory={setCategory}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          maxPrice={maxPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <ProductGrid
          products={filteredProducts}
          loading={loading}
          error={error}
        />
      </main>
      <Footer />
    </div>
  );
}
