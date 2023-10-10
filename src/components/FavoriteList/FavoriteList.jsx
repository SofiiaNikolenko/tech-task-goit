import React, { useEffect, useState } from 'react';
import {
  FavoriteListWrapper,
  FavoriteListUl,
  NoCar,
} from './FavoriteList.style';
import CatalogListItem from 'components/CatalogList/CatalogListItem/CatalogListItem';

const FavoriteList = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteItems(favorites);
  }, []);

  return (
    <FavoriteListWrapper>
      {favoriteItems.length === 0 ? (
        <NoCar>No selected cars</NoCar>
      ) : (
        <FavoriteListUl>
          {favoriteItems.map((advert, index) => (
            <CatalogListItem key={index} advert={advert} />
          ))}
        </FavoriteListUl>
      )}
    </FavoriteListWrapper>
  );
};

export default FavoriteList;
