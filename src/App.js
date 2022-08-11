import { useState } from 'react';
import './app.css';
import getData from './requests/getData';

import Artists from './components/Artists';
import Artworks from './components/Artworks';
import Collections from './components/Collections';

const App = () => {
  const [artworksData, setArtworksData] = useState([])
  const [collectionsData, setCollectionsData] = useState([])
  const [artistsData, setArtistsData] = useState([])
  const [selectType, setSelectType] = useState('artworks')

  const handleSelectChange = (e) => {
    setSelectType(e.target.value)
  }

  const handleFetch = (e) => {
    e.preventDefault();
    getData(setArtistsData, setArtworksData, setCollectionsData, selectType)
  }

  return (
    <div className="app">
      <header className="app__header">
        <p>
          Booth Centre API playground
        </p>
      </header>
      <div className='app__form'>
        <form>
          <label htmlFor='type'>What are you looking for? </label>
          <select name="data" id="type" onChange={handleSelectChange}>
            <option value="artworks">Artworks</option>
            <option value="collections">Collections</option>
            <option value="artists">Artists</option>
          </select>
          <button onClick={handleFetch}>Fetch!</button>
        </form>
      </div>

      <Artworks artworksData={artworksData} />
      <Collections collectionsData={collectionsData} />
      <Artists artistsData={artistsData} />

    </div>
  );
}

export default App;
