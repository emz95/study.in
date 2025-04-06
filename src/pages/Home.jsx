import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import LocationCard from '../components/LocationCard';
import FeaturedLocation from '../components/FeaturedLocation';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('On Campus');
    
    // Placeholder data
    const categories = [
        'On Campus', 'Seating', 'Outlets', 'WiFi', 'More'
    ];

    const featuredLocation = {
        name: 'Charles E. Young Research Library',
        rating: 4.6,
        reviews: 50,
        imageUrl: 'https://placehold.co/600x300',
    };

    const locations = [
        {
            id: 1,
            name: 'Din Tai Fung',
            rating: 4.8,
            reviews: 127,
            waitTime: '23 min',
            imageUrl: 'https://placehold.co/600x400',
        },
        {
            id: 2,
            name: 'Din Tai Fung',
            rating: 4.6,
            reviews: 89,
            waitTime: '23 min',
            imageUrl: 'https://placehold.co/600x400',
        },
        // Add more placeholder locations as needed
    ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        // Here you would typically filter locations based on category
        console.log('Selected category:', category);
    };

    return (
        <div className="flex flex-col bg-white min-h-screen p-6">
            {/* Header */}
            <h1 className="text-2xl text-gray-800 mb-4">study.in</h1>

            {/* Search Bar */}
            <div className="relative mb-6">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search for a study spot"
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-teal-500"
                />
            </div>

            {/* Recommended Section */}
            <section className="mb-8">
                <h2 className="text-lg font-medium mb-4">Recommended</h2>
                <FeaturedLocation {...featuredLocation} />
            </section>

            {/* Categories */}
            <section className="mb-8">
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-medium">Categories</h2>
                    <button className="text-teal-500 text-sm">See All</button>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-colors duration-200 ${
                                activeCategory === category
                                    ? 'bg-teal-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Location Cards Grid */}
            <section>
                <div className="grid grid-cols-2 gap-4">
                    {locations.map(location => (
                        <LocationCard key={location.id} {...location} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;