
function ProductFeed({ products }) {
  return (
    <div>
      {products.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  )
}

export default ProductFeed

