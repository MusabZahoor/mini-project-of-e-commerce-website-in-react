import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Products = () => {
  const { products, category, setCategory, addToCart, isLoggedIn, cart } =
    useContext(AppContext);

  const categories = ["All", "Men", "Women", "Kids"];
  const filtered = products.filter(
    (p) => category === "All" || p.category === category
  );

  return (
    <div>
      <h2>Products</h2>
      <div style={{ marginBottom: 10 }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              marginRight: 6,
              background: c === category ? "#333" : "#eee",
              color: c === category ? "#fff" : "#000",
              border: "none",
              padding: "6px 10px",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {products.length === 0 ? (
        <div>Loading products...</div>
      ) : filtered.length === 0 ? (
        <div>No products found.</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
            gap: 10,
          }}
        >
          {filtered.map((p) => (
            <div
              key={p.id}
              style={{ border: "1px solid #ccc", padding: 10, borderRadius: 6 }}
            >
              <h4>{p.title}</h4>
              <p>Category: {p.category}</p>
              <p>Price: ${p.price}</p>
              <button onClick={() => addToCart(p)} disabled={!isLoggedIn}>
                Add to Cart
              </button>
              {cart.find((x) => x.id === p.id) && (
                <p style={{ fontSize: 12 }}>In Cart</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;