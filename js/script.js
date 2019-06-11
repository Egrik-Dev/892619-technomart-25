(function () {	    	
			var btnWriteUs = document.querySelector(".btn-write-us");
	    	var popup = document.querySelector(".modal-write-us");
	    	var close = popup.querySelector(".modal-close");
	    	var overlay = document.querySelector(".overlay");
	    	var formWriteUs = popup.querySelector(".modal-form");
	    	var modalName = popup.querySelector(".write-us-name");
	    	var modalMail = popup.querySelector(".write-us-mail");
	    	var	modalText = popup.querySelector(".feedback-text");
	     	var isStorageSupport = true;
 			var storageName = "";
 			var storageMail = "";

	   		var productsBuy = document.querySelectorAll(".product-btn-buy");
	   		var productsBookmark = document.querySelectorAll(".product-btn-bookmarks");
	    	var linkMap = document.querySelector(".btn-map");
	    	var cartPopup = document.querySelector(".modal-cart");
	    	var bookmarkPopup = document.querySelector(".modal-bookmark");
	    	var mapPopup = document.querySelector(".modal-map");
	    	var headerCart = document.querySelector(".header-btn-cart");
	    	var headerBookmark = document.querySelector(".header-btn-bookmarks");
	    	var cartClose = cartPopup.querySelector(".modal-close");
	    	var bookmarkClose = bookmarkPopup.querySelector(".modal-close");
	    	var mapClose = mapPopup.querySelector(".modal-close");
	    	var contShoppingCart = cartPopup.querySelector(".btn-next");
	    	var contShoppingBook = bookmarkPopup.querySelector(".btn-next");
  
	    	// --- ФОРМА ОБРАТНОЙ СВЯЗИ ---

			try {
				storageName = localStorage.getItem("modalName");
				storageMail = localStorage.getItem("modalMail");
			} catch (err) {
				isStorageSupport = false;
			}	

	    	btnWriteUs.addEventListener("click", function(evt) {
	    		evt.preventDefault();
	    		popup.classList.add("modal-show");
	    		overlay.classList.add("modal-show-overlay");

	    		if (storageName && storageMail) {
	    			modalName.value = storageName;
	    			modalMail.value = storageMail;
	    			modalText.focus();
	    		} else {
	    			modalName.focus();
	    		}

	    	});

	    	close.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		popup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    		popup.classList.remove("modal-error");
	    	});

	    	overlay.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		popup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    		popup.classList.remove("modal-error");
	    	});

	    	formWriteUs.addEventListener("submit", function(evt) {
	    		if (!modalName.value || !modalMail.value || !modalText.value) {
	    		evt.preventDefault();
	    		popup.classList.remove("modal-error");
      			popup.offsetWidth = popup.offsetWidth;
	    		popup.classList.add("modal-error");
	    		} else {
	    			if (isStorageSupport) {
	    				localStorage.setItem("modalName", modalName.value);
	    				localStorage.setItem("modalMail", modalMail.value);
	    			}
	    		}
	    	});

	    	window.addEventListener("keydown", function (evt) {
    			if (evt.keyCode === 27) {
      				evt.preventDefault();
      			if (popup.classList.contains("modal-show")) {
        			popup.classList.remove("modal-show");
        			overlay.classList.remove("modal-show-overlay");
        			popup.classList.remove("modal-error");
      			}
    		}
  			});  

	    	// --- КАРТА ---

	    	linkMap.addEventListener("click", function(evt) {
	    		evt.preventDefault();
	    		mapPopup.classList.add("modal-show");
	    		overlay.classList.add("modal-show-overlay");
	    	});

 	    	mapClose.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		mapPopup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    	});

	    	overlay.addEventListener("click", function(evt) {
	    		evt.preventDefault();	    		
	    		mapPopup.classList.remove("modal-show");
	    		overlay.classList.remove("modal-show-overlay");
	    	}); 

	    	window.addEventListener("keydown", function (evt) {
    			if (evt.keyCode === 27) {
      				evt.preventDefault();
      			if (mapPopup.classList.contains("modal-show")) {
        			mapPopup.classList.remove("modal-show");
        			overlay.classList.remove("modal-show-overlay");
      			}
    		}
  			}); 

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
})()