import React, { useState, useEffect } from 'react';

import {
  CatalogItem,
  ImgContainer,
  HeartIcon,
  HeartIconBorder,
  ItemImg,
  GradientOverlay,
  ItemTitle,
  ItemTitleName,
  ItemInfo,
  ItemInfoFirst,
  ItemInfoSecond,
  ItemButton,
} from './CatalogListItem.style';

const CatalogListItem = ({
  img,
  make,
  model,
  year,
  rentalPrice,
  rentalCompany,
  type,
  mileage,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some(
      item => item.make === make && item.model === model
    );
    setIsFavorite(isAlreadyFavorite);
  }, [make, model]);

  const toggleFavorite = () => {
    if (isFavorite) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const updatedFavorites = favorites.filter(
        item => !(item.make === make && item.model === model)
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const favoriteItem = {
        make,
        model,
        img,
        year,
        rentalPrice,
        rentalCompany,
        type,
        mileage,
      };
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.push(favoriteItem);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <CatalogItem>
        <ImgContainer>
          {isFavorite ? (
            <HeartIcon onClick={toggleFavorite} />
          ) : (
            <HeartIconBorder onClick={toggleFavorite} />
          )}
          <div>
            <ItemImg src={img} alt={`${make} ${model}`} width="274" />
          </div>
          <GradientOverlay />
        </ImgContainer>
        <ItemTitle>
          <ItemTitleName>
            <p>{make}</p>
            <p style={{ color: '#3470ff' }}>{model}</p>
            <p>{year}</p>
          </ItemTitleName>
          <p>{rentalPrice}</p>
        </ItemTitle>
        <ItemInfo>
          <ItemInfoFirst>
            <p>Location</p>
            <span>|</span>
            <p>Country</p>
            <span>|</span>
            <p>{rentalCompany}</p>
            <span>|</span>
            <p>Premium</p>
          </ItemInfoFirst>
          <ItemInfoSecond>
            <p>{type}</p>
            <span>|</span>
            <p>{model}</p>
            <span>|</span>
            <p>{mileage}</p>
            <span>|</span>
            <p>Feature</p>
          </ItemInfoSecond>
        </ItemInfo>
        <ItemButton>Learn more</ItemButton>
      </CatalogItem>
    </>
  );
};

export default CatalogListItem;
