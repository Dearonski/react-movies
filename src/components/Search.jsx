import React, { useState } from "react";

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;

    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    const handleKey = (event) => {
        if (event.key === "Enter") {
            searchMovies(search, type);
        }
    };

    const handleFilter = (event) => {
        setType(() => event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    };

    return (
        <div>
            <div className="relative mb-7">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-purple-600"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />

                <button
                    onClick={() => {
                        searchMovies(search, type);
                    }}
                    className="text-white absolute right-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-800 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
                >
                    Search
                </button>
            </div>
            <div className="flex justify-center mb-7">
                <label>
                    <input
                        className="hidden peer"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={handleFilter}
                        checked={type === "all"}
                    />
                    <span className="mr-5 cursor-pointer p-2 border-2 border-gray-300 rounded-lg peer-checked:text-purple-600 peer-checked:border-purple-600 hover:text-purple-600 hover:border-purple-600 transition-all duration-500">
                        All
                    </span>
                </label>
                <label>
                    <input
                        className="hidden peer"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={handleFilter}
                        checked={type === "movie"}
                    />
                    <span className="mr-5 cursor-pointer p-2 border-2 border-gray-300 rounded-lg peer-checked:text-purple-600 peer-checked:border-purple-600 hover:text-purple-600 hover:border-purple-600 transition-all duration-500">
                        Movies Only
                    </span>
                </label>
                <label>
                    <input
                        className="hidden peer"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={handleFilter}
                        checked={type === "series"}
                    />
                    <span className="cursor-pointer p-2 border-2 border-gray-300 rounded-lg peer-checked:text-purple-600 peer-checked:border-purple-600 hover:text-purple-600 hover:border-purple-600 transition-all duration-500">
                        Series Only
                    </span>
                </label>
            </div>
        </div>
    );
};

export { Search };
