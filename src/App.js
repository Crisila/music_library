import { useEffect, useState, useRef } from 'react';
// TODO: import search bar and gallery
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import { DataContext } from './contexts/DataContext';
// not exporting a default value, that's why we can't use the name like line 4. Needed to structure it out.
import { SearchContext } from './contexts/SearchContext';

import './App.css';

function App() {
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);
  let searchInput = useRef('')

 

  const handleSearch = async searchTerm => {
    if (!searchTerm) return
    document.title = `${searchTerm} Music`;
    const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}`);
    const resData = await response.json();
    if (resData.results.length) {
      setData(resData.results)
    } else {
      setData([]);
      setMessage("Nothing found for that artist.")
    }

  }

  return (
    <div className="App">
      {/* good to group context together by their function */}
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch

      }}>
        <SearchBar />
      </SearchContext.Provider>

      <DataContext.Provider value={{ data }}>

        {message}
        <Gallery />
      </DataContext.Provider>


    </div>
  );
}

export default App;
