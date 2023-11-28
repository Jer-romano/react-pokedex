import './Pokecard.css';

const Pokecard = ( props ) => {
    return (<div className="card">
                <h3>{props.name}</h3>
                <img 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pid}.png`}
                 />
                <p>Type: {props.type} </p>
                <p>EXP: {props.exp}</p>
            </div>);
}

export default Pokecard;