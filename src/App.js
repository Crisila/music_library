import { useEffect, useState } from 'react';
// TODO: import search bar and gallery
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import { DataContext } from './contexts/DataContext';
// not exporting a default value, that's why we can't use the name like line 4. Needed to structure it out.

import './App.css';

function App() {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!search) return
      document.title = `${search} Music`;
      const response = await fetch(`https://itunes.apple.com/search?term=${search}`);
      const resData = await response.json();
      if (resData.results.length) {
        setData(resData.results)
      } else {
        setData([]);
        setMessage("Nothing found for that artist.")
      }

    }
    fetchData();
  }, [search]);

  return (
    <div className="App">
      
      <DataContext.Provider value={ { setSearch, data } }>
        <SearchBar />
        { message } 
        <Gallery/>
      </DataContext.Provider>

      
    </div>
  );
}

export default App;
