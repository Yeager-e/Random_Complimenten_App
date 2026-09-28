// compliment gen
async function fetchCompliments(){
    const response = await fetch('./data/compliments.json');
    const data = await response.json();
    console.log(data);
    return data.compliments;
};
// display
function displayRandomCompliments(compliments){
    const complimentElements = document.getElementById('compliment');
    const randomCompliment = Math.floor(Math.random() * 6);
    complimentElements.textContent = compliments[randomCompliment];
};

// call main functie IIFE - Immedialtely Invoked Function Expression
(async ()=>{
    // load compliments
    const compliments = await fetchCompliments();
    // load button
    console.log(compliments)
    const button = document.getElementById('Gen-button');
    button.addEventListener('click', ()=>displayRandomCompliments(compliments));
})();