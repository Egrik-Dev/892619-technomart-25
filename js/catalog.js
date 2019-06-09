	   		var productsBuy = document.querySelectorAll(".product-btn-buy");
	   		var productsBookmark = document.querySelectorAll(".product-btn-bookmarks");
	    	var cartPopup = document.querySelector(".modal-cart");
	    	var bookmarkPopup = document.querySelector(".modal-bookmark");
	    	var headerCart = document.querySelector(".header-btn-cart");
	    	var headerBookmark = document.querySelector(".header-btn-bookmarks");
	    	var cartClose = cartPopup.querySelector(".modal-close");
	    	var bookmarkClose = bookmarkPopup.querySelector(".modal-close");
	    	var overlay = document.querySelector(".overlay");
	    	var contShoppingCart = cartPopup.querySelector(".btn-next");
	    	var contShoppingBook = bookmarkPopup.querySelector(".btn-next");

	    	// --- КОРЗИНА ---

	    	for (var i = 0; i <= productsBuy.length-1; i++) {
	    		var product = productsBuy[i];
	    		product.addEventListener("click", function(evt) {
	    		evt.preventDefault();
	    		cartPopup.classList.add("modal-show");
	    		headerCart.classList.add("btn-users-add");
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

	    	contShoppingCart.addEventListener("click", function(evt) {
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

  			// --- ЗАКЛАДКИ ---

	    	for (var i = 0; i <= productsBookmark.length-1; i++) {
	    		var productBook = productsBookmark[i];
	    		productBook.addEventListener("click", function(evt) {
	    		evt.preventDefault();
	    		bookmarkPopup.classList.add("modal-show");
	    		headerBookmark.classList.add("btn-users-add");
	    		overlay.classList.add("modal-show-overlay");
	    	});
	    	}

 	    	bookmarkClose.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		bookmarkPopup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    	});

	    	overlay.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		bookmarkPopup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    	}); 

	    	contShoppingBook.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		bookmarkPopup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    	}); 

	    	window.addEventListener("keydown", function (evt) {
    			if (evt.keyCode === 27) {
      				evt.preventDefault();
      			if (bookmarkPopup.classList.contains("modal-show")) {
        			bookmarkPopup.classList.remove("modal-show");
        			overlay.classList.remove("modal-show-overlay");
      			}
    		}
  			});



