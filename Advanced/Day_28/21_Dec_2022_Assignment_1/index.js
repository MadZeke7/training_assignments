const productModule =  require("./product");

const products = productModule.getData();

// Returning all products
function getAllProducts(){
    return products;
}

// Products in same Category
function getSameCategory(category){
    return products.filter((item) => {
        return item.category == category ? item : null
    });
}

function getInPriceRange(min, max){
    return products.filter((item)=>{
        if(item.price >= min && item.price <=max){
            return item;
        }
    })
}

function getOutOfStock(){
    return products.filter((item)=>{
        return item.quantity==0 ? item : null;
    })
}

function getInStock(){
    return products.filter((item)=>{
        return item.quantity!=0 ? item : null;
    })
}

console.log("All Products")
console.log("---------------")
console.log(getAllProducts());
console.log("");

console.log("Food Items")
console.log("---------------")
console.log(getSameCategory("food"));
console.log("");

console.log("Items of price range between 5 and 10")
console.log("---------------")
console.log(getInPriceRange(5,10));
console.log("");

console.log("Out of stock items")
console.log("---------------")
console.log(getOutOfStock());
console.log("");


console.log("In stock items")
console.log("---------------")
console.log(getInStock());