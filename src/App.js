import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Pagination from './components/Pagination';

function App() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
          fetch(url)
          .then(response => response.json())
          .then(data => {
            setCharacters(data.results)
            setInfo(data.info)
          })
          .catch(error => console.log(error))    
        }

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }
  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(initialUrl)
  }, [])

  return (
    <>
      <Navbar brand='Rick and Morty'/>
      <div className='container mt-5'>
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevious={onPrevious} 
          onNext={onNext} />
        <Card characters={characters}/>
      </div>
      <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevious={onPrevious} 
          onNext={onNext} />
    </>
  );
}

export default App;
