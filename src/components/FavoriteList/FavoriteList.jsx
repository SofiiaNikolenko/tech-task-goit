import React, { useEffect, useState } from 'react';
import { FavoriteListWrapper, FavoriteListUl } from './FavoriteList.style';
import FavoriteListItem from './FavoriteListItem/FavoriteListItem';

const FavoriteList = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteItems(favorites);
  }, []);

  return (
    <FavoriteListWrapper>
      <FavoriteListUl>
        {favoriteItems.map((item, index) => (
          <FavoriteListItem
            key={index}
            img={item.img}
            make={item.make}
            model={item.model}
            year={item.year}
            rentalPrice={item.rentalPrice}
            rentalCompany={item.rentalCompany}
            type={item.type}
            mileage={item.mileage}
          />
        ))}
      </FavoriteListUl>
    </FavoriteListWrapper>
  );
};

export default FavoriteList;
