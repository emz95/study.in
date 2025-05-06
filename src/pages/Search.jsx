import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const categories = ['On Campus', 'Seating', 'Outlets', 'WiFi', 'More'];
const studySpots = [
  { id: 1, name: 'Study Spot 1', categories: ['On Campus', 'Seating'] },
  { id: 2, name: 'Study Spot 2', categories: ['Outlets', 'WiFi'] },
  { id: 3, name: 'Study Spot 3', categories: ['On Campus'] },
  // Add more as needed
];

const Search = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('On Campus');

  // Filter logic
  const filteredSpots = studySpots.filter(
    spot =>
      spot.name.toLowerCase().includes(search.toLowerCase()) &&
      (activeCategory === 'More' || spot.categories.includes(activeCategory))
  );

  return (
    <div className="flex flex-col bg-white min-h-screen p-6">
      {/* Header */}
      <h1 className="text-2xl text-gray-800 mb-4">Search</h1>

      {/* Search Bar */}
      <div className="relative mb-4">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for a study spot"
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-[#5B8D87]"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-[#5B8D87] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Placeholder Cards */}
      <div className="flex flex-col gap-4">
        {filteredSpots.length === 0 ? (
          <div className="text-gray-400 text-center mt-8">No study spots found.</div>
        ) : (
          filteredSpots.map(spot => (
            <div
              key={spot.id}
              className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"
            >
              {spot.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;