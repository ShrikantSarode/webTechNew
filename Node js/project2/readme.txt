use products

db.createCollection("products")

db.products.insert([{
    "name": "helmet",
    "price": 5000,
    "discount":"20"
},
{
    "name": "book",
    "price": 100,
    "discount":"10"
},
{
    "name": "laptop",
    "price": 80000,
    "discount":"40"
}])

db.products.find().pretty()