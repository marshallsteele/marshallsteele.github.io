
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {

	closeExistingTabs();
	
	var client_tab = document.getElementById("client_tab");
	var products_tab = document.getElementById("products_tab");
	var cart_tab = document.getElementById("cart_tab");

    if (tabName == "Client") {
        client_tab.className += " active";
    }
	if (tabName == "Products") {
        populateListProductChoices('displayProduct')
		client_tab.className += " active";
		products_tab.className += " active";
    }
	if (tabName == "Cart") {
        populateListProductChoices('displayProduct')
		client_tab.className += " active";
		products_tab.className += " active";
		cart_tab.className += " active";
    }

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";

}

function closeExistingTabs() {
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabrow");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbox

function populateListProductChoices(slct2) {
    var s1 = document.getElementsByName('restriction');
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1);

	var row = document.createElement('div');
	row.className = "product_row"

	var col0 = document.createElement('div');
	var col1 = document.createElement('div');
	var col2 = document.createElement('div');
	var col3 = document.createElement('div');

	col0.className = col1.className = col2.className = col3.className = "product_column"

	// for each item in the array, create a checkbox element, each containing information:
	/*
	<div class="product_card">
		<img src="img_avatar.png" alt="Avatar" style="width:100%">
		<div class="info_container">
			<h4><b>Bread</b></h4>
			<p>Price: 0.99$</p>
		</div>
	</div>
	*/
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
        var productPrice = optionArray[i].price;
		var productImage = optionArray[i].image;
		// create the checkbox and add in HTML DOM
        var card = document.createElement('div');
		card.className = "product_card";

		var image = document.createElement('img');
		image.src = productImage;
		image.alt = productName;
		card.appendChild(image);

		var info = document.createElement('div');
		info.className = "info_container";

		var name = document.createElement('p');
		name.className = "info_product_name";
		name.appendChild(document.createTextNode(productName));

		var price = document.createElement('p');
		price.className = "info_product_price";
		price.appendChild(document.createTextNode("Price: $" + productPrice.toString()));


		info.appendChild(name);
		info.appendChild(price);

		card.appendChild(info);

		var label = document.createElement('label');
		label.className = "product_card_label"
		label.appendChild(card)

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		label.appendChild(checkbox);

        var span = document.createElement("span");
        span.className = "product_checkmark";
        label.appendChild(span);

        // add checkbox entry to HTML DOM
		if (i % 4 == 0) {col0.appendChild(label)}
		else if (i % 4 == 1) {col1.appendChild(label)}
		else if (i % 4 == 2) {col2.appendChild(label)}
		else if (i % 4 == 3) {col3.appendChild(label)}

	}

	row.appendChild(col0);
	row.appendChild(col1);
	row.appendChild(col2);
	row.appendChild(col3);

	s2.appendChild(row);
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var noneSelected = true;
	var para = document.createElement("P");

	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			noneSelected = false;
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	if (noneSelected) {
		para.appendChild(document.createTextNode("You have no items in your cart."));
		para.appendChild(document.createElement("br"));
	}
		
	// add paragraph and total price
	c.appendChild(para);

	var price = document.createElement("p");
	price.className = "price";
	price.appendChild(document.createTextNode("Total Price: $" + getTotalPrice(chosenProducts).toFixed(2)));
	c.appendChild(price);
	c.appendChild(document.createElement("br"));

	openInfo('Cart');
		
}

// This function is called when the user places the order and would proceed to the payment
// and shipping portion.
// Currently, it uses a toast to tell the user their order has been palced
// from https://www.w3schools.com/howto/howto_js_snackbar.asp
function orderPlaced() {
  // Get the snackbar DIV
    var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
    x.className = "show";

  // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}