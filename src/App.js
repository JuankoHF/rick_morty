import ricmortyimg from './img/rick-morty.png';
import {useState} from "react";
import Characters from './components/Characters';
import Seeker from './seeker/Seeker';
import PersonAlive from './components/PersonAlive';
import PersonDead from './components/PersonDead';
import Footer from './footer/Footer';
import './App.css';
import './seeker/Seeker.css';



function App() {
  const [characters, setCharacters] = useState(null);
  const [status, setStatus] = useState(null);
  const [dead, setDead] = useState(null);
  const[name, setName] = useState(null);
  const[loading, setLoading] = useState(false);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    console.log(characterApi);
  };
  const AlivereqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setStatus(characterApi.results);
  };
  const DeadreqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setDead(characterApi.results);
  };
  
  const Search = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setName(characterApi.results);
    console.log(characterApi.results);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        {(characters || status || dead) ?(
          <>
            <h1 className="title">Rick 
              <span> & </span> Morty
            </h1> 
            {characters && 
              <Characters  characters={characters} setCharacters={setCharacters}/> 
            } 
            {status &&
              <PersonAlive status={status} setStatus={setStatus}/>
            } 
            {dead &&
              <PersonDead dead={dead} setDead={setDead}/>
            } 
          </>
        ) : (name) ?(
          <>
            <h1 className="header-title">Rick 
              <span> & </span> Morty
            </h1>
            <Seeker name={name} setName={setName} 
              loading={loading} setLoading={setLoading}
            />
            <span onClick={() => {
                    Search();
                    setLoading(true);
            }}className='lup'> </span>
          </>
        ) : (
          <>
            <h1 className="header-title">Rick 
              <span> & </span> Morty
            </h1>
            <Seeker />
            <span onClick={() => {
                    Search();
                    setLoading(true);
            }}className='lup'> </span>
            <img  src={ricmortyimg} alt="Rick & Morty" className="img-home" />
            <div className='button-continer'>
              <button onClick={reqApi} className="btn-search">Todos los personajes</button>
              <button onClick={AlivereqApi} className="btn-search_alive">Personajes Vivos</button>
              <button onClick={DeadreqApi} className="btn-search_dead">Personajes Muertos</button>
            </div>
          </>
        )}
        <Footer />
      </header>
      
    </div>
    
  );

}

export default App;
