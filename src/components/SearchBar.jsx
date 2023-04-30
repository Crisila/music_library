import { useState } from "react";

export default function SearchBar({setSearch}) {
    let [searchTerm, setSearchTerm] = useState('');

    // submits the form
    let onSearchSubmit = e => {
        e.preventDefault()
        // TODO: wire in search from outside
        setSearch(searchTerm)
    }

    return (
        <form onSubmit={ onSearchSubmit }>
            <input 
                type="text"
                placeholder="Enter a search term here"
                onChange={ e => setSearchTerm(e.target.value) }
            />

            <input 
                type="submit"

            />


        </form>
    )
}