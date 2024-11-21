interface Product {
  name: string
  price: number
  stock?: number // Optional property with default value
  imageUrl?: string // Optional property
}

function createPartialProduct(initialData: Partial<Product>): Product {
  const defaultProduct: Product = {
    name: "Unnamed Product",
    price: 0.0,
    stock: 10,
  }

  return { ...defaultProduct, ...initialData }
}

const partialProduct = createPartialProduct({
  name: "Cool NFT Item",
  price: 29.99,
  imageUrl: "https://example.com/cool.png",
})

console.log(partialProduct)
const minimalProduct = createPartialProduct({ name: "Mystery Item", price: 9.99 })
console.log(minimalProduct) // { name: "Mystery Item", price: 9.99, stock: 10 }
