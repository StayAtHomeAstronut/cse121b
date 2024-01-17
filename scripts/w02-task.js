/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Sean Porter';
var currentYear = new Date().getFullYear();
const profilePicture = "images/beach.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('picture img');
if (imageElement) {
    imageElement.src = profilePicture;
}

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

const mostFavoriteFood = 'Doner Kebab';
const favoriteFoods = ['Pad Thai', 'Massaman Curry', 'Nudel Schinken', 'Sushi', 'Cheesecake'];
foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.push(mostFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`






