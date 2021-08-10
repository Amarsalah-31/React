import { useEffect,useState } from "react";

function randomNumber(){
    return Math.floor(Math.random()*100) + 1;
}
const Home =(() => {
    const[pokemon,setNewpokemon] = useState({});
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((res) => res.json())
    .then((res) => {
        setNewpokemon(res)
    })
    
    }, [])
    return(
        <div>
            <h2>Home</h2>
            <button onClick={getpokemon}>Get a pokemon</button>
            <p>Name:{pokemon.name}</p>
            <p>Height:{pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type:{pokemon.type}</p>
        </div>
    );
});

export default Home;

