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
var LoadingSpinner = document.getElementsByClassName("loader")
var resultAllfood  = find ('ul')

// fetching the data from api 
function fetchAllFoodItem(searchQuery){
    LoadingSpinner.style.display= "block"
    var baseURL = `https://forkify-api.herokuapp.com/api/search?q= ${searchQuery} `;


    fetch (baseURL).then(function(response){
        return response.json()
    })
    .then(function(responseinJSON){
       console.log(responseinJSON)
    })
    .catch(function(err){
        console.log(err)
    });             

}



// input item given by the user and submited 
getAllFoodForm.addEventListener('submit',function(event){
    event.preventDefault();
    var searchQuery = event.target.searchFood.value;
    console.log(searchQuery);
    event.target.searchFood.value =''
    event.target.searchFood.focus()

}); 














