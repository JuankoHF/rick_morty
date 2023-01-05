import React, { useState } from 'react';
import './Seeker.css'

export default function Seeker(props) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const {name, setName} = props;
    const {loading, setLoading} = props;

    

    const resetValue = () => {
        setValue('');
        setName(null);
        setError(false);
    }

    React.useEffect(() => {

        setTimeout(() => {

            if (loading) {

                if(value) {
                    setLoading(false);
                    console.log("if");
            
                }else  {
                    setError(true);
                    setLoading(false);
                    console.log("else");
                }
                
            }

        }, 1500);

    }, );

    if(!name) {

        return (
            <div className='seek'>
                <input placeholder='Buscar personaje' 
                    value = {value}
                    onChange = {(event) => {
                        setValue(event.target.value);
                        console.log(event.target.value);  
                    }}
                />
                <button ></button> 
            </div>
        );

    } else {

        return (
            <>
                <div className='seek'>
                    <input placeholder='Buscar personaje' 
                        value = {value}
                        onChange = {(event) => {
                            setValue(event.target.value);
                            console.log(event.target.value);
                            setError(false);
                        }}
                    />
                    <button ></button> 
                </div>
                {loading && (                             // validacion del estado de error
                    <p>Cargando...</p>
                )}
                {error && (                             // validacion del estado de error
                    <div className='megaError'>
                        <h3>Introduzca un valor válido.</h3>
                        <p>Vuelva a inicio e intentelo nuevamente.
                        </p>
                    </div>
                )}  
                <div className='characters'>
                   
                    <div className='search_container-characters'>
                    
                        {name.map((character,index) => (
                            <>
                                {character.name === value &&
                                    <> 
                                        <div className='search_character-container' key = {index}>
                                            <div className='simage'>
                                                <img src={character.image} alt={character.name} />
                                            </div>
                                            <div className='content_date'>
                                                <h2>{character.name}</h2>
                                                <p>                        
                                                    {character.status === "Alive" ? (
                                                        <>
                                                            <span className='alive'/>
                                                            Alive
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className='dead'/>
                                                            Dead  
                                                        </>
                                                    )}
                                                </p>
                                                <div className='info'>
                                                    <p>
                                                        <span className='text-grey'>Episodios: </span>
                                                        <span>{character.episode.length}</span>
                                                    </p>
                                                    <p>
                                                        <span className='text-grey'>Especie: </span>
                                                        <span>{character.species}</span>
                                                    </p>
                                                    <p>
                                                        <span className='text-grey'>Creado en: </span>
                                                        <span>{character.created}</span>
                                                    </p>
                                                    <p>
                                                        <span className='text-grey'>Locacion: </span>
                                                        <span>{character.location.name}</span>
                                                    </p>
                                                    <p>
                                                        <span className='text-grey'>Origen: </span>
                                                        <span>{character.origin.name}</span>
                                                    </p>
                                                </div>
                                            </div>

                                        </div> 
                                    </>       
                                                
                                }                   
                                    
                            
                            </> 
                            
                        ))}
                       
                       <span className='searhc_back-home' onClick={resetValue}>
                         {value} No encontrado. VOLVER
                       </span>    
                    </div>
                    <span className='back-home' onClick={resetValue}>
                        Volver a inicio
                    </span> 
                </div>
            </>
        );
    }

      
   
}
