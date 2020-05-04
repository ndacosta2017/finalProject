//Favorites javascript
var favorite = function(){
    var favorites = " ";
    makeFavorite(favorites);
}

//Saves the input field for later use
function makeFavorite(favorites){
    favorites = document.getElementById("country").value;
    document.getElementById('favorites').onclick = function() {
        displayfav(favorites);
     };
}

//Displays the saved country name on the input field
function displayfav(favorites){
    document.getElementById("country").value = favorites;
}
