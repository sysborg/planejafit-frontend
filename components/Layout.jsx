import React from "react"
import Sidebar from './Sidebar'
import Navbar from "./Navbar";

export default function Layout({children}) {
    const [search, setSearch] = React.useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Handle search submit logic here
    }

    return (
        <div className='relative min-h-screen bg-[#F5F6F8] flex gap-8'>
            <Sidebar />
            <main className='flex flex-col w-full gap-8 py-8'>
                <Navbar onChange={handleSearch} searchValue={search} onSubmit={handleSearchSubmit} />
                {children}
            </main>
        </div>
    );
}