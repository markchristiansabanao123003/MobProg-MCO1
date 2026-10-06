// ======================================================
// ONLINE STORE MANAGEMENT SYSTEM
// ======================================================


// ======================================================
// 1. 10 LET VARIABLES
// ======================================================

let customerName = "Mark";
let customerAge = 21;
let customerCity = "Tacloban";
let totalOrders = 5;
let totalSpent = 4500;
let discount = 10;
let shippingFee = 100;
let points = 250;
let cartItems = 3;
let paymentMethod = "GCash";


// ======================================================
// 2. 10 CONST VARIABLES
// ======================================================

const storeName = "TechZone";
const storeLocation = "Tacloban City";
const storeYear = 2026;
const taxRate = 0.12;
const maxDiscount = 20;
const freeShippingMinimum = 1000;
const currency = "PHP";
const storeOwner = "Juan Santos";
const storeCategory = "Electronics";
const storeStatus = "Open";


// ======================================================
// 3. 5 ARROW FUNCTIONS
// ======================================================

const greetCustomer = (name) => {
    return `Welcome to ${storeName}, ${name}!`;
};

const calculateDiscount = (price, discountRate) => {
    return price - (price * discountRate / 100);
};

const calculateTax = (price) => {
    return price * taxRate;
};

const checkAge = (age) => {
    return age >= 18 ? "Adult" : "Minor";
};

const calculatePoints = (amount) => {
    return amount / 100;
};

console.log(greetCustomer(customerName));
console.log(`Discounted Price: ${calculateDiscount(1000, discount)}`);
console.log(`Tax: ${calculateTax(1000)}`);
console.log(`Customer Type: ${checkAge(customerAge)}`);
console.log(`Earned Points: ${calculatePoints(totalSpent)}`);


// ======================================================
// 4. 10 TEMPLATE LITERALS
// ======================================================

console.log(`Customer Name: ${customerName}`);

console.log(`Customer Age: ${customerAge}`);

console.log(`Customer City: ${customerCity}`);

console.log(`Store Name: ${storeName}`);

console.log(`Store Location: ${storeLocation}`);

console.log(`Total Orders: ${totalOrders}`);

console.log(`Total Spent: ${currency} ${totalSpent}`);

console.log(`Payment Method: ${paymentMethod}`);

console.log(`Cart Items: ${cartItems}`);

console.log(`Store Status: ${storeStatus}`);


// ======================================================
// 5. 3 DESTRUCTURED ARRAYS
// ======================================================

// Destructured Array #1

const products = ["Laptop", "Mouse", "Keyboard"];

const [product1, product2, product3] = products;

console.log(product1);
console.log(product2);
console.log(product3);


// Destructured Array #2

const prices = [35000, 500, 1200];

const [price1, price2, price3] = prices;

console.log(price1);
console.log(price2);
console.log(price3);


// Destructured Array #3

const brands = ["Lenovo", "Logitech", "Razer"];

const [brand1, brand2, brand3] = brands;

console.log(brand1);
console.log(brand2);
console.log(brand3);


// ======================================================
// 6. 3 DESTRUCTURED OBJECT LITERALS
// ======================================================

// Object #1

const customer = {
    name: "Mark",
    age: 21,
    city: "Tacloban"
};

const {
    name,
    age,
    city
} = customer;

console.log(name);
console.log(age);
console.log(city);


// Object #2

const laptop = {
    laptopBrand: "Lenovo",
    laptopModel: "ThinkPad",
    laptopPrice: 35000
};

const {
    laptopBrand,
    laptopModel,
    laptopPrice
} = laptop;

console.log(laptopBrand);
console.log(laptopModel);
console.log(laptopPrice);


// Object #3

const order = {
    orderNumber: 101,
    orderStatus: "Delivered",
    orderTotal: 4500
};

const {
    orderNumber,
    orderStatus,
    orderTotal
} = order;

console.log(orderNumber);
console.log(orderStatus);
console.log(orderTotal);


// ======================================================
// 7. 2 ARRAYS USING SPREAD OPERATORS
// ======================================================

// Spread Array #1

const computerProducts = [
    "Laptop",
    "Desktop"
];

const accessories = [
    "Mouse",
    "Keyboard"
];

const allProducts = [
    ...computerProducts,
    ...accessories
];

console.log(allProducts);


// Spread Array #2

const oldCustomers = [
    "Mark",
    "Juan"
];

const newCustomers = [
    "Maria",
    "Pedro"
];

const allCustomers = [
    ...oldCustomers,
    ...newCustomers
];

console.log(allCustomers);


// ======================================================
// 8. 2 OBJECT LITERALS USING SPREAD OPERATOR
// ======================================================

// Object Spread #1

const basicProduct = {
    productName: "Laptop",
    productPrice: 35000
};

const completeProduct = {
    ...basicProduct,
    productBrand: "Lenovo",
    productStock: 10
};

console.log(completeProduct);


// Object Spread #2

const basicCustomer = {
    firstName: "Mark",
    lastName: "Santos"
};

const completeCustomer = {
    ...basicCustomer,
    email: "mark@example.com",
    membership: "Gold"
};

console.log(completeCustomer);


// ======================================================
// 9. 2 ARRAYS USING .map()
// ======================================================

// Map #1

const productPrices = [
    1000,
    2000,
    3000,
    4000
];

const discountedPrices = productPrices.map((price) => {
    return price * 0.90;
});

console.log(discountedPrices);


// Map #2

const customerNames = [
    "mark",
    "juan",
    "maria"
];

const uppercaseNames = customerNames.map((customer) => {
    return customer.toUpperCase();
});

console.log(uppercaseNames);


// ======================================================
// 10. 2 ARRAYS USING .filter()
// ======================================================

// Filter #1

const availableStocks = [
    0,
    5,
    10,
    0,
    20
];

const productsInStock = availableStocks.filter((stock) => {
    return stock > 0;
});

console.log(productsInStock);


// Filter #2

const customerAges = [
    15,
    18,
    21,
    16,
    25
];

const adultCustomers = customerAges.filter((customerAge) => {
    return customerAge >= 18;
});

console.log(adultCustomers);


// ======================================================
// 11. 2 OBJECT LITERALS USING OPTIONAL CHAINING
// ======================================================

// Optional Chaining #1

const userAccount = {
    username: "Mark123",

    address: {
        cityName: "Tacloban",
        barangay: "Downtown"
    }
};

console.log(userAccount.address?.cityName);

console.log(userAccount.contact?.phone);


// Optional Chaining #2

const productInformation = {
    product: "Laptop",

    specifications: {
        processor: "Ryzen 5",
        ram: "16GB"
    }
};

console.log(productInformation.specifications?.processor);

console.log(productInformation.warranty?.years);


// ======================================================
// FINAL OUTPUT
// ======================================================

console.log(`Thank you for shopping at ${storeName}!`);