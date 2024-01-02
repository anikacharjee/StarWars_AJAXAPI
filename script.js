document.addEventListener('DOMContentLoaded', function () {
    const characterList = document.getElementById('characterList');

    function fetchData() {
        const apiUrl = 'https://swapi.dev/api/people/';

        fetch(apiUrl)
            .then(response => {
                if(!response.ok) { 
                    throw new Error('HTTP error! Status :- ${response.status}');
                }
                return response.json();
            })
            .then(data => { 
                const characters = data.results;
                displayCharacters(characters);
            })
            .catch(error => { 
                console.error('Fetch Error', error.message);
            });
    }

    function displayCharacters(characters) {
        characterList.innerHTML = '';

        characters.forEach(character => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name:- ${character.name}, Heights: ${character.height} cm`;
            characterList.appendChild(listItem);
        });
    }

    fetchData();
});