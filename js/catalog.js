	   		var products = document.querySelectorAll(".product-btn-buy");
	    	var cartPopup = document.querySelector(".modal-cart");
	    	var cartClose = cartPopup.querySelector(".modal-close");
	    	var overlay = document.querySelector(".overlay");
	    	var continueShopping = document.querySelector(".btn-next");

	    	for (var i = 0; i <= products.length-1; i++) {
	    		var product = products[i];
	    		product.addEventListener("click", function(evt) {
	    		evt.preventDefault();
	    		cartPopup.classList.add("modal-show");
	    		overlay.classList.add("modal-show-overlay");
	    	});
	    	}

 	    	cartClose.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		cartPopup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    	});

	    	overlay.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		cartPopup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    	}); 

	    	continueShopping.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		cartPopup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    	}); 

	    	window.addEventListener("keydown", function (evt) {
    			if (evt.keyCode === 27) {
      				evt.preventDefault();
      			if (cartPopup.classList.contains("modal-show")) {
        			cartPopup.classList.remove("modal-show");
        			overlay.classList.remove("modal-show-overlay");
      			}
    		}
  			});