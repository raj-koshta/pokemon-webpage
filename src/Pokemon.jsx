import React, { useEffect, useState } from 'react'
import "./index.css"
import PokemonCard from './PokemonCard';

const Pokemon = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

    const fetchPokemon = async () => {

        try {
            const res = await fetch(API);
            const data = await res.json();
            const pokemonsData = data.results.map(async (curPokemon) => {

                // console.log(curPokemon.url)

                const pokemonRes = await fetch(curPokemon.url);
                const pokemonData = await pokemonRes.json();
                return pokemonData;
            })
            // console.log(pokemonsData)

            const detailedPokemonsData = await Promise.all(pokemonsData);

            console.log(detailedPokemonsData)
            setPokemons(detailedPokemonsData);
            setLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    if (loading) {
        return <div className='container'><h1>Loading</h1></div>
    }

    if (error) {
        return <div className='container'><h1>{error.message}</h1></div>
    }

    //-------------- Search Funcationality----------------------------
    const searchData = pokemons.filter((curPokemon) =>
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <section className='container'>
                <header>
                    <h1>Lets Catch Pokemon</h1>
                </header>

                <div className='pokemon-search'>
                    <input type='text' placeholder='Search Pokemon'
                        value={search} onChange={(e) =>  setSearch(e.target.value) } />
                </div>

                <div>
                    <ul className='cards'>
                        {
                            searchData.map((curPokemon) => {
                                return <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Pokemon
