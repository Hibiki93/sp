window.onload = onCreated();

function onCreated() {
    var product = {
        name: "Product 123",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusamus! Facere magnam soluta esse. Quasi minima non laboriosam ipsa nihil, delectus a blanditiis laborum corporis, quidem exercitationem, officiis autem? Provident?"
    };
    //   document.getElementById("someInput").value = product;
    document.getElementById("productName").innerHTML = product.name;
    document.getElementById("productDetail").innerHTML = product.detail;
    console.log("I am runing");
}

function categoryLoad() {
    var x = [{
            title: "Accommodation",
            category: [
                "Tourism & Recreation",
                "Hotel",
                "Popular Places",
                "Travel Bureaus",
                "Chauffeur Service",
                "Travel Bus",
                "Luggage",
                "Boat Rental",
                "Apartment"
            ]
        },
        {
            title: "Fashion",
            category: [
                "Apparel",
                "Uniforms",
                "Bags",
                "Tee-Shirts Printing",
                "Fashions",
                "Embroidery",
                "Textile",
                "Boutique",
                "Cloth",
                "Sewing Machine",
                "Hotel Amenities",
                "Optical Centre"
            ]
        }
    ];
}