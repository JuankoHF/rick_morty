import React from 'react';

export default function PersonDead(props) {
    const { dead,setDead } = props;

    const resetDead = () => {
        setDead(null);
    }
    return (
        <div className='characters'>
            <h2>Personajes Muertos</h2>
            <span className='back-home' onClick={resetDead}>
                Volver a inicio
            </span>
            <div className='container-characters'>
                {dead.map((character,index) => (
                     <>
                        {character.status === "Dead" &&
                            <div className='character-container' key = {index}>
                                <div className='image'>
                                    <img src={character.image} alt={character.name} />
                                </div>
                                <div>
                                    <h3>{character.name}</h3>
                                    <h6>                        
                                        <span className='dead'/>
                                        Dead
                                    </h6>
                                    <p>
                                        <span className='text-grey'>Episodios: </span>
                                        <span>{character.episode.length}</span>
                                    </p>
                                    <p>
                                        <span className='text-grey'>Especie: </span>
                                        <span>{character.species}</span>
                                    </p>
                                </div>
    
                            </div>   
                        }
                    </>
                ))}
            </div>
            <span className='back-home' onClick={resetDead}>
                Volver a inicio
            </span>
        </div>
    );
    
}