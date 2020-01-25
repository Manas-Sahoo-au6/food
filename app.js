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



// input item given by the user and submited 







// fetching the data from api 
function fetchAllFoodItem(itemName){
    LoadingSpinner.style.display= "block"
    var baseURL = `https://forkify-api.herokuapp.com/api/search?q=pizza`


    return fetch(baseURL)
    .then(function(response){
        return response.json()
    })
    .then(function(responseJSON){
        return responseJSON.pizza
    })
    .catch(function(err){
        console.log(err)
    })

}







