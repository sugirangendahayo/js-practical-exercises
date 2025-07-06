function sortProducts(products) {
  return products.sort((a, b) => a.price - b.price);
}

// Example usage
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
];

const sorted = sortProducts(products);
console.log(sorted);
