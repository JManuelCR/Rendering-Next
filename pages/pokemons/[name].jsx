import Image from "next/image";
import fetch from "node-fetch"
export default function PokemonDetail (props) {
    return (
        <>
        <img src={props.pokemon.sprites.other["official-artwork"].front_default} 
        alt={props.pokemon.name}/>
        <p>{props.pokemon.name}</p>
        </>
    )
}
export async function getStaticPaths() {
    const Json = await fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json()
    );
    const paths = Json.results.map(pokemon => {
        return  { params:  { name: pokemon.name} }
    })
    return { paths, fallback: false };
};

export async function getStaticProps ({ params }) {    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    .then(res => res.json()
    );
    return {
        props: { pokemon },
        revalidate: 60 * 60 * 24, // un dia en segundos, ponerlo cada hora seria bueno a veces es necesario ponerlo a 5 min
    };
}