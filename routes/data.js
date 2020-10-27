module.exports = [ {
    id: 1,
    productName: 'Boots',
    description: 'Waterproof boots, ideal for MN winters',
    available: true,
    quantityAvailable: 100,
    features: [ 'Warm', 'Waterproof', 'Come in a pair', 'They are boots'],
    image: 'boots.png',
    quantity: 1,      // quantity customer is ordering, start at 1
    maxQuantity: 5,
    minQuantity: 1,
    price: 49.99,
   
}, {
    id: 2,
    productName: 'Hat',
    description: 'Wool hat with logo',
    available: true,
    quantityAvailable: 40,
    features: [ 'Wool blend fabric', 'Embroidered brand logo', 'Machine washable'],
    image: 'hat.png',
    quantity: 1,      // quantity customer is ordering, start at 1
    maxQuantity: 10,
    minQuantity: 1,
    price: 14.99,
  
} ]