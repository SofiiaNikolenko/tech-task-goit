import React, { useState, useEffect } from 'react';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { FavoriteContainer, Sidebar } from './Favorite.style';

const Favorite = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteItems(favorites);
  }, []);

  return (
    <FavoriteContainer>
      <Sidebar>
        <h2 style={{ color: 'white' }}>Favorite cars</h2>
        {favoriteItems.length === 0 ? (
          <p style={{ color: 'white' }}>No selected cars</p>
        ) : (
          <ul>
            {favoriteItems.map((advert, index) => (
              <li key={index} style={{ display: 'flex', gap: '4px' }}>
                <p>{advert.make}</p>
                <p style={{ color: 'white' }}>{advert.model}</p>
              </li>
            ))}
          </ul>
        )}
      </Sidebar>
      <FavoriteList />
    </FavoriteContainer>
  );
};

export default Favorite;
