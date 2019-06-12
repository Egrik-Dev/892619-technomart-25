			var btnWriteUs = document.querySelector(".btn-write-us");
	    	var popup = document.querySelector(".modal-write-us");
	    	var allCloses = document.querySelectorAll(".modal-close");
	    	var overlay = document.querySelector(".overlay");
	    	var formWriteUs = document.querySelector(".modal-form");
	    	var modalName = document.querySelector(".write-us-name");
	    	var modalMail = document.querySelector(".write-us-mail");
	    	var	modalText = document.querySelector(".feedback-text");
	     	var isStorageSupport = true;
 			var storageName = "";
 			var storageMail = "";
	    	var mapPopup = document.querySelector(".modal-map");
	    	// var mapClose = document.querySelector(".modal-close");

	   		var productsBuy = document.querySelectorAll(".product-btn-buy");
	   		var productsBookmark = document.querySelectorAll(".product-btn-bookmarks");
	    	var linkMap = document.querySelector(".btn-map");
	    	var cartPopup = document.querySelector(".modal-cart");
	    	var bookmarkPopup = document.querySelector(".modal-bookmark");
	    	var headerCart = document.querySelector(".header-btn-cart");
	    	var headerBookmark = document.querySelector(".header-btn-bookmarks");
	    	// var cartClose = document.querySelector(".modal-close");
	    	// var bookmarkClose = document.querySelector(".modal-close");
	    	var contShoppingCart = document.querySelectorAll(".btn-next");
	    	var contShoppingBook = document.querySelectorAll(".btn-next");
  
	    	// --- ФОРМА ОБРАТНОЙ СВЯЗИ ---

			try {
				storageName = localStorage.getItem("modalName");
				storageMail = localStorage.getItem("modalMail");
			} catch (err) {
				isStorageSupport = false;
			}	

			if (btnWriteUs) {
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
	    	}

	    	for (var i = 0; i <= allCloses.length-1; i++) {
	    		var close = allCloses[i];
		    	close.addEventListener("click", function(evt) {
		    		evt.preventDefault();	
		    		if (popup || mapPopup) {    		
			    		popup.classList.remove("modal-show");
		    			mapPopup.classList.remove("modal-show");
		    			popup.classList.remove("modal-error");
	    			}
	    			if (cartPopup || bookmarkPopup) {
		    			cartPopup.classList.remove("modal-show");
		    			bookmarkPopup.classList.remove("modal-show");
	    			}
		    		overlay.classList.remove("modal-show-overlay");
		    	});
	    	}

	    	if (popup) {
		    	overlay.addEventListener("click", function(evt) {
		    		evt.preventDefault();	    		
		    		popup.classList.remove("modal-show");
		    		overlay.classList.remove("modal-show-overlay");
		    		popup.classList.remove("modal-error");
		    	});
	    	}

	    	if (formWriteUs) {
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
	    	}

	    	if (popup) {
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
  			}

	    	// --- КАРТА ---

	    	if (linkMap) {
		    	linkMap.addEventListener("click", function(evt) {
		    		evt.preventDefault();
		    		mapPopup.classList.add("modal-show");
		    		overlay.classList.add("modal-show-overlay");
		    	});
	    	}

 	    // 	close.addEventListener("click", function(evt) {
	    	// 	evt.preventDefault();	    		
	    	// 	mapPopup.classList.remove("modal-show");
	    	// 	overlay.classList.remove("modal-show-overlay");
	    	// });

	    	if (mapPopup) {
		    	overlay.addEventListener("click", function(evt) {
		    		evt.preventDefault();	    		
		    		mapPopup.classList.remove("modal-show");
		    		overlay.classList.remove("modal-show-overlay");
		    	}); 
	    	}

	    	if (mapPopup) {
		    	window.addEventListener("keydown", function (evt) {
	    			if (evt.keyCode === 27) {
	      				evt.preventDefault();
	      			if (mapPopup.classList.contains("modal-show")) {
	        			mapPopup.classList.remove("modal-show");
	        			overlay.classList.remove("modal-show-overlay");
	      			}
	    		}
	  			}); 
  			}

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

 	    // 	close.addEventListener("click", function(evt) {
	    	// 	evt.preventDefault();	    		
	    	// 	cartPopup.classList.remove("modal-show");
	    	// 	overlay.classList.remove("modal-show-overlay");
	    	// });

	    	if (cartPopup) {
		    	overlay.addEventListener("click", function(evt) {
		    		evt.preventDefault();	    		
		    		cartPopup.classList.remove("modal-show");
		    		overlay.classList.remove("modal-show-overlay");
		    	}); 
	    	}

	    	if (contShoppingCart) {
	    		for (var i = 0; i <= contShoppingCart.length-1; i++) {
	    			var btnShopingCart = contShoppingCart[i];
		    	btnShopingCart.addEventListener("click", function(evt) {
		    		evt.preventDefault();	    		
		    		cartPopup.classList.remove("modal-show");
		    		overlay.classList.remove("modal-show-overlay");
		    	}); 
		    	}
	    	}

	    	if (cartPopup) {
		    	window.addEventListener("keydown", function (evt) {
	    			if (evt.keyCode === 27) {
	      				evt.preventDefault();
	      			if (cartPopup.classList.contains("modal-show")) {
	        			cartPopup.classList.remove("modal-show");
	        			overlay.classList.remove("modal-show-overlay");
	      			}
	    		}
	  			});
  			}

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

 	    // 	close.addEventListener("click", function(evt) {
	    	// 	evt.preventDefault();	    		
	    	// 	bookmarkPopup.classList.remove("modal-show");
	    	// 	overlay.classList.remove("modal-show-overlay");
	    	// });

	    	if (bookmarkPopup) {
		    	overlay.addEventListener("click", function(evt) {
		    		evt.preventDefault();	    		
		    		bookmarkPopup.classList.remove("modal-show");
		    		overlay.classList.remove("modal-show-overlay");
		    	}); 
	    	}

	    	if (contShoppingBook) {
	    		for (var i = 0; i <= contShoppingBook.length-1; i++) {
	    			btnShoppingBook = contShoppingBook[i];	    		
		    		btnShoppingBook.addEventListener("click", function(evt) {
		    		evt.preventDefault();	    		
		    		bookmarkPopup.classList.remove("modal-show");
		    		overlay.classList.remove("modal-show-overlay");
		    	}); 
		    	}
	    	}

	    	if (bookmarkPopup) {
		    	window.addEventListener("keydown", function (evt) {
	    			if (evt.keyCode === 27) {
	      				evt.preventDefault();
	      			if (bookmarkPopup.classList.contains("modal-show")) {
	        			bookmarkPopup.classList.remove("modal-show");
	        			overlay.classList.remove("modal-show-overlay");
	      			}
	    		}
	  			});
  			}