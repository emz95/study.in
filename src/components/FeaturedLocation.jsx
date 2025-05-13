import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';

const FeaturedLocation = ({ name, rating, reviews, imageUrl }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    style={{ width: '600px', height: '400px', objectFit: 'cover' }} 
                />
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        setIsFavorite(!isFavorite);
                    }}
                    className="absolute top-3 right-3 transition-colors duration-200"
                >
                    <FiHeart 
                        size={20} 
                        className={isFavorite ? 'text-teal-500 fill-teal-500' : 'text-white hover:text-teal-500'}
                        style={{ strokeWidth: 2 }}
                    />
                </button>
            </div>
            <div className="p-4">
                <h3 className="font-medium">{name}</h3>
                <div className="flex items-center mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm">{rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({reviews} reviews)</span>
                </div>
            </div>
        </div>
    );
};

FeaturedLocation.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default FeaturedLocation; 