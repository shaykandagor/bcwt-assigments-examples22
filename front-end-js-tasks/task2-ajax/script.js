'use strict'

const apiUrl = ' https://api.tvmaze.com/search/shows?q=';

// get reference to DOM elements
const form = document.querySelector('#search-form');
const button = form.querySelector('button');
const input = form.querySelector('input');
const results = document.querySelector('#results');

button.addEventListener('click', (event) => {
    // do not submit the form to anywhere(no page refresh)
    event.preventDefault();
    // prevent the generic event listener at the bottom
    event.stopPropagation();
    if(input.value.length > 1){
        getTVSeriesData(input.value);

    }   
});

const renderResults = (data) => {
    // clear existing results before appending new ones
    results.innerHTML = '';

    // loop through all search results
    for (let i=0; i<data.length; i++) {
        const h3 = document.createElement('h3');
        h3.innerHTML = data[i].show.name;

        const img = document.createElement('img');

        if((data[i].show.image.medium)){
            img.src = data[i].show.image.medium;
            
        }else{
            alert(data[i].show.name);
            img.src = "http://placekitten.com/200/300";
        }

        const officialSite = document.createElement('a');
        
        if((data[i].show.officialSite)){
            officialSite.href = data[i].show.officialSite;   
            officialSite.textContent = "officialSite"; 
        }
        


        const summary = document.createElement('p');
        summary.innerHTML = data[i].show.summary;

        
        const genres = document.createElement('p');
        genres.innerHTML += data[i].show.genres.join(" | ");

        const container = document.createElement('div');

        const left = document.createElement('aside');
        const right = document.createElement('aside');

        container.appendChild(left);
        container.appendChild(right);

        right.appendChild(h3);
        left.appendChild(img);
        right.appendChild(officialSite);
        right.appendChild(summary);
        right.appendChild(genres);

        results.appendChild(container);

    }
    
};

const getTVSeriesData  = async (name) => {
    try{
        const response = await fetch(apiUrl + name);
        const data = await response.json();
        console.log('results:', data);
        renderResults(data);
    }catch (error){
        console.log('network failure:', error)

    }
    
};


// generic event handling example
document.addEventListener('click', (event) =>{
    console.log('mouse clicked somewhere on the page', event)

});
