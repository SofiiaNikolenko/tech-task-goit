import React, { useState, useEffect } from 'react';

import {
  FavoriteItem,
  ImgContainer,
  ItemImg,
  GradientOverlay,
  ItemTitle,
  ItemTitleName,
  ItemInfo,
  ItemInfoFirst,
  ItemInfoSecond,
  ItemButton,
} from './FavoriteListItem.style';

const FavoriteListItem = ({
  img,
  make,
  model,
  year,
  rentalPrice,
  rentalCompany,
  type,
  mileage,
}) => {
  return (
    <>
      <FavoriteItem>
        <ImgContainer>
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
      </FavoriteItem>
    </>
  );
};

export default FavoriteListItem;
