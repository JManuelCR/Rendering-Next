export default function SSG(props) {
  return (
    <>
      <h1>Esta es un pagina renderizada estaticamente</h1>
      <p>Lo que significa que se genera al correr el build de este proyecti</p>
      <p>Felicidades con esto tenemos el stetic side generation</p>
      <p>Tenemos que correr el comando de construccion npm run buil</p>
      <p>Name: {props.name}</p>
      {props.pokemons.map((pokemon, idx) => {
        return (          
            <p key={pokemon - idx}>{pokemon.name}</p>          
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon").then(
    (res) => res.json()
  );
  return {
    props: {
      name: "Charles",
      pokemons: pokemons.results,
    },
  };
}
