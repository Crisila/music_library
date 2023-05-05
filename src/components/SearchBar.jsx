import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";


export default function SearchBar() {
    const { term, handleSearch } = useContext(SearchContext);


    // submits the form
    let onSearchSubmit = e => {
        e.preventDefault()
        // TODO: wire in search from outside
        // setSearch(searchTerm)
        handleSearch(term.current.value)
        term.current.value = ''
        // line 16 clears the search bar after submiting
        
    }

    return (
        <form onSubmit={ onSearchSubmit }>
            <input 
                type="text"
                ref={term}
                placeholder="Enter a search term here"

            />

            <input 
                type="submit"

            />


        </form>
    )
}