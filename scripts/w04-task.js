/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = 
{
    name: "Sean Porter",
    photo: "images/beach.jpg",
    favoriteFoods: ['Doner Kebab', 'Pad Thai', 'Massaman Curry', 'Nudel Schinken', 'Chicken Cordon Bleu'],
    hobbies: ['Hiking', 'Travelling', 'Aviation', 'SCUBA diving', 'Amusement Parks', 'Guitar', 'Writing'],
    placesLived:[],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push
(
    {
        place: 'Layton, Utah',
        length: '18 years'
    },
    {
        place: 'Düsseldorf, Germany',
        length: '2 years'
    },
    {
        place: 'Rexburg, Idaho',
        length: '2 years'
    }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');

    //Put the German umlaut in the text
    if (food === 'Doner Kebab') {
        food = food.replace('o', '&ouml;');
    }
    else if (food === 'Nudel Schinken'){
        food = food.replace('u', '&uuml;');
    }

    //this needs to be innerHTML to display properly
    li.innerHTML = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */

//li ensures there are bullet points like above, although instructions say to use "ul"
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.innerHTML = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {

    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});


