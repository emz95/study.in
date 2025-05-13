import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';

const LocationCard = ({ name, rating, reviews, waitTime, imageUrl }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                    className="absolute top-2 right-2 transition-colors duration-200"
                >
                    <FiHeart 
                        size={16} 
                        className={isFavorite ? 'text-teal-500 fill-teal-500' : 'text-white hover:text-teal-500'}
                        style={{ strokeWidth: 2 }}
                    />
                </button>
            </div>
            <div className="p-2">
                <h3 className="font-medium text-sm">{name}</h3>
                <div className="flex items-center mt-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="ml-1 text-xs">{rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({reviews})</span>
                    <span className="text-xs text-gray-500 ml-2">{waitTime}</span>
                </div>
            </div>
        </div>
    );
};

LocationCard.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    waitTime: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default LocationCard; 