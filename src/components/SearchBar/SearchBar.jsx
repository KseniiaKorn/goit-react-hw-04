import { useState } from "react";
import s from './SearchBar.module.css'
import toast, { Toaster } from "react-hot-toast";


const SearchBar = ({handleSetQuery}) => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() === "") {
            toast('Please enter a search query!',
                {
                    style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    },
                }
            );
            return;
        };

        handleSetQuery(value);
    }
    return (
        <header className={s.header}>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setValue(e.target.value)} value={value}
                    name="input"
                    className={s.input}
                    type='text'
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" />
                <button type='submit' className={s.btn}>
                    Search
                </button>
            </form>
            <Toaster position="top-right" />
        </header>
    );
};

export default SearchBar;