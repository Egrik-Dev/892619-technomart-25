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

  			var linkMap = document.querySelector(".btn-map");
	    	var mapPopup = document.querySelector(".modal-map");
	    	var mapClose = mapPopup.querySelector(".modal-close");

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