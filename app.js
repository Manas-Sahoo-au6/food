//get all elements 
//we are have one input from the source items 
//form submited 
// promise is going to be returned 
//some filter action needed 
// printing the result 
//utilty function 

function find(selector){
    return document.querySelector(selector)
}
//step1 

var  getAllFoodForm = find ('form ')
var LoadingSpinner = document.getElementById("loader")
var resultAllfood  = find ('div')
var results = document.getElementById('resulltItem')
var titleElement = document.getElementById('title')
// fetching the data from api 
function fetchAllFoodItem(searchQuery){
    LoadingSpinner.style.display= "block"
    var baseURL = `https://forkify-api.herokuapp.com/api/search?q= ${searchQuery} `;


    fetch (baseURL).then(function(response){
        return response.json()  
    })
    .then(function(responseinJSON){
      return responseinJSON.recipes  
    })
    .then(function(data){
        $('.recipeClass').remove();
        LoadingSpinner.style.display = 'none';
        if(typeof data === "undefined"){
            console.log("not found man");
        }else{
        console.log(data)
        for ( i=0 ; i < data.length ; i++){
            
            var newDiv = document.createElement('div');
            var titelDiv = document.createElement('div');
            var imageDiv = document.createElement('IMG');        
            var publicherDiv = document.createElement('div');
            
            newDiv.setAttribute("class", "recipeClass");
            publicherDiv.setAttribute("class", "publicherClass");
            titelDiv.setAttribute("class", "titleClass");
            
            imageDiv.setAttribute("src",data[i].image_url);

            titelDiv.innerHTML = data[i].title;
            publicherDiv.innerHTML = data[i].publisher;
            newDiv.appendChild(titelDiv);
            newDiv.appendChild(publicherDiv);
            //debugger;
            newDiv.appendChild(imageDiv)
            
                        
            results.insertAdjacentElement('beforeend', newDiv);
        }
        results.style.color = 'red';
        }
            return data     

    })
    .catch(function(err){
        alert(err.messege)
    });             

}



// input item given by the user and submited 
getAllFoodForm.addEventListener('submit',function(event){
    event.preventDefault();
    var searchQuery = event.target.searchFood.value;
    fetchAllFoodItem(searchQuery)
    .then(function(food){
        $('.new').append("<h1>ALL DELICIOUS RECEIPE ARE HERE" + searchQuery + "</h1>")
        LoadingSpinner.style.display = "none"
        for (j=0 ; j<food.length; j++){
            console.log(food[j].title)
        }

    })

    console.log(searchQuery);
    event.target.searchFood.value =''
    event.target.searchFood.focus()

}); 














