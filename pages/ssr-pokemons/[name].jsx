import fetch from "node-fetch"
import { useRouter } from "next/router"
export default function PokemonDetail (props) {
    const router = useRouter()
    return (
        <>
        <img src={props.pokemon.sprites.other["official-artwork"].front_default} 
        alt={props.pokemon.name}/>
        <p>{props.pokemon.name}</p>
        <p>name from: {router.query?.name}</p>
        </>
    )
}

export async function getServerSideProps(ctx) {  
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ctx.params.name}`)
    .then(res => res.json()
    );
    return {
        props: { pokemon },
    };
}