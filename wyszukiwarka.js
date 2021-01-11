const fruits = ['Apple', 'Orange', 'Mango'];


document.getElementById('search').addEventListener('input', (e)=>{

    let frutisArray = [];

    if(e.target.value){
        fruitsArray = fruits.filter(fruit => fruit.toLowerCase().includes(e.target.value));
        fruitsArray = fruitsArray.map(fruit => `<li>${fruit}</li>`)
    }

    console.log(fruitsArray);
});

function showFruitsArray(fruitsArray){
    const html = !fruitsArray.length ? '' : fruitsArray.join('');
    document.querySelector('ul').innerHTML = html;
}