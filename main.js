"use strict"

// how the format of the coffee is.
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<p><h2>' + coffee.name + '</h2></p>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// this is how the submit add
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === 'all'){
         // let x = document.querySelectorAll(coffees.roast);
         // filteredCoffees.push(x);

        filteredCoffees = coffees.filter(function(coffee){
            return coffee.roast !== selectedRoast;})

        // coffees.forEach(function(coffee){
        //     filteredCoffees.push(coffee.roast);
        // })

        // filteredCoffees.push(coffee.roast);
         // filteredCoffees = document.querySelectorAll(coffees.roast);
    }
    else {

     filteredCoffees = coffees.filter(function(coffee){
        return coffee.roast === selectedRoast;
    })}

    // coffees.forEach(function(coffee) {
    //
    //     if(coffee.roast === 'all') {
    //         return coffees;
    //     } else if (coffee.roast === selectedRoast) {
    //         filteredCoffees.push(coffee);
    //     }
    // });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// search for coffees
// function checkForName (string, coffees.name) {
//     let filteredCoffees = [];
//     for (var i=0; i<coffees.name.length; i++) {
//
//         if (coffees.name.toLowerCase()[i].match(string.toLowerCase())){
//             filteredCoffees = [i];
//
//         return filteredCoffees;
//     }
//
// }
// function coffeeSearch() {
//
//     console.log(CoffeeSearchUserInput.value);
// }

//testing for getting value form page
// function getInputValue(){
//     // Selecting the input element and get its value
//     var inputVal = document.getElementById("myInput").value;
//
//     // Displaying the value
//     alert(inputVal);
// }













//input from the webpage
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');



// var CoffeeSearchUserInput = document.querySelector(`#coffee-compare`);
// var CoffeeSearchUserInput = document.getElementById(`coffee-compare`);

//the section where the coffee outputs go
tbody.innerHTML = renderCoffees(coffees);



submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
//
const search = () =>{
    const searchbox = document.getElementById(`coffee-compare`).value.toUpperCase();
    //the container in which the coffee is in in the HTML
    const coffees = document.getElementById(`coffees`)
    const coffee = document.querySelectorAll(".coffee")
    const coffeeName = document.getElementsByTagName("h2")
    for(let i=0; i<coffeeName.length; i++){
        let match = coffee[i].getElementsByTagName('h2')[0];
        if(match){
            let textValue =  match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(searchbox) > -1){
                coffee[i].style.display = '';}
            else{
                coffee[i].style.display = 'none'

            }
        }
    }
}

//the function for adding to the coffee array
var addRoastSelection = document.querySelector('#roast-selection-add');
let userInput = document.querySelector('#userInput')
let newCoffeeSumbit = document.getElementById('submit-new-coffee')



newCoffeeSumbit.addEventListener('onclick', addCoffee)
newCoffeeSumbit.addEventListener('click', updateCoffees)

function addCoffee() {
    let newCoffee = {
        id: coffees[coffees.length - 1].id + 1,
        name: userInput.value,
        roast: addRoastSelection.value};
    coffees.push(newCoffee);
    let x = [];

    for(let i = 0; i < coffees.length; i++){
        x = x + coffees[i];
    }
    return document.getElementById('test').innerHTML= x;
    updateCoffees();
}