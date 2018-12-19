var authContainer = document.querySelector(".auth");
var modal = document.getElementById("authModal");

authContainer.addEventListener("click", function(e) {
		modal.classList.add('active');
		
		modal.firstElementChild.addEventListener("click", function(e) {
			modal.classList.remove('active');			
		});
});