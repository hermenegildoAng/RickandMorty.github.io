const url = 'https://rickandmortyapi.com/api/character';
const container = document.querySelector('.container')
const details = document.querySelector('.details')

const parametro = document.querySelector('.search')
const buscador = document.querySelector('.cont2')







const card = character => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = ` 
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <h3>${character.status}</h3>
        <h3>${character.species}</h3>
        <button data-id="${character.id}"  class="btn" >Ver mas</button>
    `;
    return div; 
};

const page = Math.ceil(Math.random() * 42);


const switchDiv = () => {
    container.classList.toggle('invisible')
    details.classList.toggle('invisible')
}


console.log(option)
 


const getId = (e) => {
    if (e.target.classList.contains('btn')) {
        const id = e.target.getAttribute('data-id')

        fetch(url + '/' + id)
            .then(response => response.json())
            .then(character => {
                console.log(character)
                const html = `
                
                <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <h3>${character.status}</h3>
        <h3>${character.species}</h3>
        <h3>${character.gender}</h3>
       
        <h3>${character.type}</h3>
        
        
                
                
                `
                details.querySelector('div')
                    .innerHTML = html
                switchDiv()
            })

       
    }
}

const search = (f) => {
    if (f.target.classList.contains('btn1')) {
        const busqueda = document.querySelector('.search').value;
const option = document.querySelector('.select').value;
        console.log(url + '/?' + option + '=' +  busqueda)
        fetch(url + '/?' + option + '=' +  busqueda)
       
            .then((response) => response.json())
            .then(data => {
                data.results.forEach(character => {
                    const characterCard = card(character);
                    container.appendChild(characterCard); 
                });
        });

       
    }
}

fetch(url + '?page=' + page)
    .then((response) => response.json())
    .then(data => {
        data.results.forEach(character => {
            const characterCard = card(character);
            container.appendChild(characterCard); 
        });
    });




container.addEventListener('click', getId)
buscador.addEventListener('click', search)