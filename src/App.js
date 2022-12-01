import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import { PokemonDetails} from './routes/PokemonDetails'
import { Home } from './routes/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  return (
    <div data-testid="app">
      <BrowserRouter>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home pokemonList={pokemonList} />} />
          <Route path="/:name" element={<PokemonDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
