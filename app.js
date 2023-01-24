const btn = document.querySelector('button');
const textHolder = document.querySelector('p');
const punchlineHolder = document.querySelector('.punch');

let index = 0;

class Api {
    async apiHandle() {
        try {
            let jokes = await fetch("joke.json");
            let result = await jokes.json();
            let finalJokes = result.items;
            finalJokes = finalJokes.map(item => {
                const jokeType = item.type;
                const jokeSetup = item.setup;
                const jokePunchline = item.punchline;

                return {jokeType, jokeSetup, jokePunchline};
            });
            return finalJokes;
        }
        
        catch (error) {
            console.log(error);
        }
    }
}



btn.addEventListener('click', () => {
   index++;
    if(index === 88) {
        index = 0;
    }
    const api = new Api();
    api.apiHandle().then(api => {
        textHolder.innerText = api[index].jokeSetup;
        punchlineHolder.innerText = api[index].jokePunchline;
    });
});
