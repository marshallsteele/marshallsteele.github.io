	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Yogurt",
		lactoseFree: false,
		nutFree: true,
        organic: false,
		price: 1.99
	},
	{
		name: "Almond Granola",
		lactoseFree: true,
		nutFree: false,
        organic: false,
		price: 0.99
	},
	{
		name: "Salmon",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 6.49
	},
    {
		name: "Milk",
		lactoseFree: false,
		nutFree: true,
        organic: false,
		price: 3.49
	},
    {
		name: "Peanut Butter",
		lactoseFree: true,
		nutFree: false,
        organic: false,
		price: 11.99
	},
    {
		name: "Bread",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 2.99
	},
    {
		name: "Frappuccino",
		lactoseFree: false,
		nutFree: true,
        organic: false,
		price: 4.99
	},
    {
		name: "Organic Cane Sugar",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 9.99
	},
    {
		name: "Banana",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 0.99
	},
    {
		name: "Organic Banana",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 1.49
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
    let active_restrictions = [];
	let products_restricted = [];
    for (let j=0; j<restrictions.length; j++) {
        if (restrictions[j].checked) {
            active_restrictions.push(restrictions[j].value)
        }
    }

    for (let i=0; i<prods.length; i+=1) {
        include_item = true;
        if (
            (active_restrictions.includes("lactose_intolerant")) && (prods[i].lactoseFree == false) ||
            (active_restrictions.includes("nut_allergy")) && (prods[i].nutFree == false) ||
            (active_restrictions.includes("organic_only")) && (prods[i].organic == false)
        ) { include_item = false }

        if (include_item){
            products_restricted.push(prods[i]);
        }
    }
    // sort products ascending price
    // code inspired by https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
    products_restricted.sort((a, b) => (a.price < b.price) ? 1 : -1)

	return products_restricted;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}