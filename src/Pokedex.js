import Pokecard from "./Pokecard";
import './Pokedex.css';

const Pokedex = ({ pokemon }) => {
    return (<div className="tiles">
        { pokemon.map( p => <Pokecard key={p.id}
                                      pid={p.id}
                                      name={p.name}
                                      type={p.type}
                                      exp={p.base_experience}
                             />)}
    </div>);

};

export default Pokedex;