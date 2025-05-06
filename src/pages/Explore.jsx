import React, { useState } from 'react';
import StarRating from '../components/StarRating';
import { FiHeart } from 'react-icons/fi';

const categories = [
  { key: 'wifi', label: 'Wifi Speed' },
  { key: 'outlet', label: 'Outlet Availability' },
  { key: 'crowd', label: 'Crowdedness' },
  { key: 'ambience', label: 'Ambience' },
  { key: 'food', label: 'Food/Drinks' },
];

const Explore = () => {
  // State
  const [isFavorite, setIsFavorite] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [ratings, setRatings] = useState({
    wifi: 0,
    outlet: 0,
    crowd: 0,
    ambience: 0,
    food: 0,
  });

  // Handlers
  const handleRatingChange = (key, value) => {
    setRatings(r => ({ ...r, [key]: value }));
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header image */}
      <div className="h-40 w-full bg-gray-200 rounded-b-3xl overflow-hidden mb-2">
        <img
          src="https://placehold.co/600x200"
          alt="Location"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name, address, hours, favorite, review */}
      <div className="flex items-start justify-between px-4">
        <div>
          <h1 className="text-2xl font-bold">The Garden</h1>
          <div className="text-sm text-gray-500">Cafe</div>
          <div className="text-sm text-gray-500">1234 Study Ave, Los Angeles, CA</div>
          <div className="text-sm text-gray-500">7 AM - 5 PM</div>
        </div>
        <div className="flex flex-col items-center gap-2 mt-1">
          <button
            onClick={() => setIsFavorite(fav => !fav)}
            className={`rounded-full p-2 transition-colors ${isFavorite ? 'bg-orange-100' : ''}`}
          >
            <FiHeart
              size={28}
              className={isFavorite ? 'text-orange-400 fill-orange-400' : 'text-gray-300'}
              style={{ strokeWidth: 2 }}
            />
          </button>
          <button
            onClick={() => setShowReview(true)}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow"
          >
            Review
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="px-4 mt-4">
        <div className="font-bold text-lg text-center mb-1">Rating</div>
        <div className="flex justify-center mb-1">
          <StarRating value={5} onChange={() => {}} />
        </div>
        <div className="text-center text-gray-700 mb-2">5.0 stars</div>
        <div className="flex justify-between text-xs text-gray-500 max-w-md mx-auto mb-2">
          <div className="flex flex-col items-center">
            <span>📶</span>
            <span>5.0</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🔌</span>
            <span>5.0</span>
          </div>
          <div className="flex flex-col items-center">
            <span>👥</span>
            <span>5.0</span>
          </div>
          <div className="flex flex-col items-center">
            <span>☕</span>
            <span>5.0</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🎵</span>
            <span>5.0</span>
          </div>
        </div>
      </div>

      {/* Photos */}
      <div className="px-4 mt-4">
        <div className="font-bold mb-2">Photos</div>
        <div className="flex gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-24 h-20 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4 mt-6">
        <div className="font-bold mb-2">Reviews</div>
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-start gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-300" />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-sm">John Doe</span>
                <StarRating value={5} onChange={() => {}} />
              </div>
              <div className="text-gray-700 text-sm">
                This place is so nice! Plenty of seating and amazing environment. Would go again :)
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Modal */}
      {showReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90vw] max-w-md mx-auto">
            <div className="font-bold text-xl mb-2 text-center">The Garden</div>
            <div className="mb-4 text-center text-gray-700">Leave a review...</div>
            <div className="flex flex-col gap-3 mb-4">
              {categories.map(cat => (
                <div key={cat.key}>
                  <div className="text-sm text-gray-600 mb-1">{cat.label}</div>
                  <StarRating
                    value={ratings[cat.key]}
                    onChange={val => handleRatingChange(cat.key, val)}
                  />
                </div>
              ))}
            </div>
            <button className="w-full flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 mb-2">
              <span role="img" aria-label="camera">📷</span> Add photos
            </button>
            <button className="w-full flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 mb-4">
              <span role="img" aria-label="notes">📝</span> Add notes
            </button>
            <button
              className="w-full bg-[#5B8D87] text-white rounded-lg py-2 font-semibold"
              onClick={() => setShowReview(false)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;