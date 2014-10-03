function processJSON(json) {
    var product_photos = document.getElementById('thumbnail_container');
    var container = document.createElement('span');

    // Initialize a var for new elements
    var span;

    // Build a list of images
    for (var item in json.products) {

        // Create an element to hold an image. It's easier to append
        // stuff to the page this way.
        span = document.createElement('span');

        // Stick html into the new div, append to the container.	
		if (json.products[item].virtuemart_category_id == "1")	{ 
		span.innerHTML = '<a class="thumbnail" title="' + json.products[item].product_name + '" href="http://www.currymasters.com.au/shop/' + json.products[item].file_url + '" data-keywords="' + json.products[item].virtuemart_category_id + '"><img height="72" width="72" alt="' + json.products[item].product_name + '" src="http://www.currymasters.com.au/shop/' + json.products[item].file_url_thumb + '"/></a>'; 
		} else if (json.products[item].virtuemart_category_id == "2") {
			span.innerHTML = '<a class="thumbnail" title="' + json.products[item].product_name + '" href="http://www.currymasters.com.au/shop/' + json.products[item].file_url + '" data-keywords="' + json.products[item].virtuemart_category_id + '"><img height="72" width="72" alt="' + json.products[item].product_name + '" src="http://www.currymasters.com.au/shop/' + json.products[item].file_url_thumb + '"/></a>';	 }



//		span.innerHTML = '<a class="thumbnail" title="' + json.products[item].product_name + '" href="http://www.currymasters.com.au/shop/' + json.products[item].file_url + '" data-keywords="' + json.products[item].virtuemart_category_id + '"><img height="72" width="72" alt="' + json.products[item].product_name + '" src="http://www.currymasters.com.au/shop/' + json.products[item].file_url_thumb + '"/></a>';        
		
        //div.innerHTML = json.products[item].product_name;
        container.appendChild(span);
    }

    // Add the images to the DOM all at once (rather than one at a time, 
    // which can cause multiple reflows.
    product_photos.appendChild(container);
}