const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  // 1. Using forEach to console.log each product name to the console
  console.log("1. Using forEach to console.log each product name to the console:");
  products.forEach(product => {
    console.log(product.product);
  });
  
  // 2. Using filter to filter out products that have a name longer than 5 characters
  console.log("\n2. Using filter to filter out products that have a name longer than 5 characters:");
  const filteredProducts = products.filter(product => product.product.length <= 5);
  console.log(filteredProducts);
  
  // 3. Using both filter and map. Convert all prices that are strings to numbers, and remove all products without prices. Then use reduce to calculate the combined price of all remaining products.
  console.log("\n3. Using filter, map, and reduce to convert prices to numbers and calculate the combined price:");
  const combinedPrice = products
    .filter(product => product.price !== '' && !isNaN(product.price))
    .map(product => ({ ...product, price: parseFloat(product.price) }))
    .reduce((total, product) => total + product.price, 0);
  console.log(combinedPrice);
  
  // 4. Using reduce to concatenate all product names to create a string
  console.log("\n4. Using reduce to concatenate all product names:");
  const concatenatedNames = products.reduce((names, product) => {
    if (names === '') {
      return product.product;
    } else {
      return names + ', ' + product.product;
    }
  }, '');
  console.log(concatenatedNames);
  
  // 5. Using reduce to calculate the highest and lowest-priced items
  console.log("\n5. Using reduce to calculate the highest and lowest-priced items:");
  const { highest, lowest } = products.reduce(
    (result, product) => {
      if (product.price !== '' && !isNaN(product.price)) {
        const price = parseFloat(product.price);
        if (price > result.highest.price) {
          result.highest = { name: product.product, price };
        }
        if (price < result.lowest.price) {
          result.lowest = { name: product.product, price };
        }
      }
      return result;
    },
    { highest: { name: '', price: Number.NEGATIVE_INFINITY }, lowest: { name: '', price: Number.POSITIVE_INFINITY } }
  );
  const highestAndLowest = `Highest: ${highest.name}. Lowest: ${lowest.name}`;
  console.log(highestAndLowest);
  
  // 6. Using Object.entries and reduce to recreate the object with modified keys
  console.log("\n6. Using Object.entries and reduce to recreate the object with modified keys:");
  const modifiedProducts = Object.entries(products).reduce((result, [key, value]) => {
    const { product, price } = value;
    result[key] = { name: product, cost: price };
    return result;
  }, {});
  console.log(modifiedProducts);
  