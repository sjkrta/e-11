const Products = ({ products, loading, error }) => {
  return (
    <div>
      <h1>PRODUCTS:</h1>

      {loading && <div>Getting data..</div>}

      {error && <div>{error.message || "Failed to load products.."}</div>}

      {products &&
        products.products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
    </div>
  );
};

export default Products;
