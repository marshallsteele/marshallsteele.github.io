var services = {
    nail: {
        title: "Nail Trimming",
        price: "$20.00",
        description: "Have your pets nails cut."
    },
    consult: {
        title: "Pet Consult",
        price: "$40.00",
        description: "If you are concerned about any aspet of your pets health, we will complete a full assessment for you."
    },
    spay: {
        title: "Spay/Neuter",
        price: "$120.00",
        description: "An opperation will be performed to say or neuter your animal."
    },
    microchip: {
        title: "Microchipping",
        price: "$24.00",
        description: "We never want to lose our pets. Have them microshipped to uniquely identify them should it be needed."
    },
    shots: {
        title: "First Shots",
        price: "$210.00",
        description: "It is important for your pets health to ensure they are protected against common diseases. Have them immunized by our capable staff."
    }
}

function setDescription(service) {
    var title = document.getElementById('service_desc_header');
	title.innerHTML = "";
    var price = document.getElementById('service_desc_price');
	price.innerHTML = "";
    var content = document.getElementById('service_desc_content');
	content.innerHTML = "";

    var title_text, price_text, content_text;

    switch(service) {
        case "nail":
            title_text = services.nail.title;
            price_text = services.nail.price;
            content_text = services.nail.description;
            break;
        case "consult":
            title_text = services.consult.title;
            price_text = services.consult.price;
            content_text = services.consult.description;
            break;
        case "spay":
            title_text = services.spay.title;
            price_text = services.spay.price;
            content_text = services.spay.description;
            break;
        case "microchip":
            title_text = services.microchip.title;
            price_text = services.microchip.price;
            content_text = services.microchip.description;
            break;
        case "shots":
            title_text = services.shots.title;
            price_text = services.shots.price;
            content_text = services.shots.description;
            break;
    }

    title.appendChild(document.createTextNode(title_text));
    price.appendChild(document.createTextNode(price_text));
    content.appendChild(document.createTextNode(content_text));

}

function bookAppointment() {
    var alert = document.getElementById('bookAppointment');
	alert.style = "display: block;";
}