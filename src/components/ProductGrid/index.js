import React from "react";
import ProductCard from "../ProductsCard";

export default function ProductGrid({ products, loading, error }) {
  if (loading) return <div className="loader">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!products.length) return <div className="empty">No products matched your filters.</div>;

  return (
    <section className="product-area">
      <div className="product-grid" role="list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
