import './styles/Pokedex.css';
import Pokecard from "./Pokecard";


const Pokedex = (props) => {
    let winMessage = null;
    if (props.isWinner) {
        winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
    }

    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (
                    <Pokecard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
            <h4>Total experience: {props.exp}</h4>
            {winMessage}
        </div>
    );
}


export default Pokedex;
