import React from 'react'
import Proptypes from 'prop-types'


const Header = ({onSearch}) => {
    const [textSeacrh , setTextSearch] = React.useState('')

    return (
        <div className="p-2 bg-black flex items-center justify-between">

            <div className="flex items-center space-x-4">
                <h1 className="text-[28px] uppercase font-bold text-red-600">Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                </nav>
            </div>

            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search" className="py-2 px-4"
                onChange={(e) => setTextSearch(e.target.value)} value={textSeacrh}
                />
                <button className="bg-red-600 text-white p-2 w-[120px]" onClick={() => onSearch(textSeacrh)}>Search</button>
            </div>
        </div>
    )
}

Header.propTypes = {
    onSearch: Proptypes.func
}

export default Header