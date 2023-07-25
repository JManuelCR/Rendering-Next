export default function SSR (props) {
    return ( 
        <>
        <h1>Esta pagina es renderizada en el servidor</h1>
        <p>Lo que significa que se genera al hacer una peticion al servidor</p>
        <p>Felicidades con esto tenemos el stetic side generation</p>
        <p>Tenemos que correr el comando de construccion npm run buil</p>
        <p>Name: {props.name}</p>
        {props.pokemons.map((pokemon, idx) => {
          return (          
              <p key={pokemon - idx}>{pokemon.name}</p>          
          );
        })}
      </>
    )
}

export async function getServerSideProps() {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=500").then(
      (res) => res.json()
    );
    console.log("pokemons", pokemons);
    return {
      props: {
        name: "Charles",
        pokemons: pokemons.results,
      },
    };
  }