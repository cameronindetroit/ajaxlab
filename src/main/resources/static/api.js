var nextPage = "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json";
var btn = document.getElementById("load-more");	
var apiContainer = document.getElementById("results");




//when the button is clicked...
btn.addEventListener("click", function() {
	var request = new XMLHttpRequest();
	// this will open the connection and allow us to get data
	// first param is what we want to do "GET", second param is the json url
	request.open("GET", nextPage);


	// when the AJAX response loads...
	request.onload = function() {
		
		console.log(request.responseText);
		var data = JSON.parse(request.responseText);
		nextPage = data.next;
		renderHTML(data);
		
		if (!nextPage) {
//			btn.classList.add("hide-me");
		}
	};
	
	

	request.send();
	
	// created to render the HTML to the page, can reuse this by making modifications 
	function renderHTML(data){
		var peopleArray = data.complete;
		for(i = 0; i < peopleArray.length; i++){
			
			var htmlString = "<p>" + peopleArray[i].firstName + ", " + peopleArray[i].lastName +", " +
			
			peopleArray[i].innovation + ", " + peopleArray[i].year + "</p>";
			apiContainer.insertAdjacentHTML("beforeend", htmlString);
		}
		
	}
});