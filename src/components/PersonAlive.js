import React from 'react';

export default function PersonAlive(props) {
    const { status, setStatus } = props;
    
    const resetStatu = () => {
        setStatus(null);
    }

    return (
        <div className='characters'>
            <h2>Personajes Vivos</h2>
            <span className='back-home' onClick={resetStatu}>
                Volver a inicio
            </span> 
            <div className='container-characters'>
                {status.map((character,index) => (
                    <>
                        {character.status === "Alive" &&
                            <div className='character-container' key = {index}>
                                <div className='image'>
                                    <img src={character.image} alt={character.name} />
                                </div>
                                <div>
                                    <h3>{character.name}</h3>
                                    <h6>                        
                                        <span className='alive'/>
                                        Alive
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
            <span className='back-home' onClick={resetStatu}>
                Volver a inicio
            </span>
        </div>
    );
    
}
   

