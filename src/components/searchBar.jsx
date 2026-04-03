import { useEffect, useState } from "react";

export const SearchBar = (searchField) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleSubmit = (e)=> {
    e.preventDefault();
  }

  useEffect(() => {
    (async ()=> {
      if(query.trim() === ''){
        setResults([]);
        return;
      }
      const timeoutId = setTimeout(async() => {
        try{
          const response = await fetch(``);
          const data = await response.json();
          setResults(data.map(fruit => fruit.name));
        }catch(err){
          console.error(err.message)
        }
      }, 700);
      return () => clearTimeout(timeoutId);
    })()
  }, [query]);


  return (
    <div id="search-container">
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="search-input">Search for { searchField }</label>
        <input id="search-input" type="search"
        value={ query }
        onChange={(e)=> setQuery(e.target.value)}
        />
        { results.length > 0 ?
          results.map( result => {
            return (
              <p className="result-item">{ result }</p>
            );
          })
          : <p>No results found</p>
        }
      </form>
    </div>
  );
}
