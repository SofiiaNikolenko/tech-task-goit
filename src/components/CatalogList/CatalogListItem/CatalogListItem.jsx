import React, { useState, useEffect } from 'react';
import Modal from 'components/Modal/Modal';

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
  TextLimit,
  ItemButton,
} from './CatalogListItem.style';

const CatalogListItem = ({ advert }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = advert;

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
        id,
        year,
        make,
        model,
        type,
        img,
        functionalities,
        rentalPrice,
        rentalCompany,
        address,
        mileage,
      };
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.push(favoriteItem);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addressParts = address ? address.split(',') : [];

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
            <TextLimit>{make}</TextLimit>
            <TextLimit style={{ color: '#3470ff' }}>{model}</TextLimit>
            <p>{year}</p>
          </ItemTitleName>
          <p>{rentalPrice}</p>
        </ItemTitle>
        <ItemInfo>
          <ItemInfoFirst>
            <p>{addressParts[1].trim()}</p>
            <span>|</span>
            <p>{addressParts[addressParts.length - 1].trim()}</p>
            <span>|</span>
            <TextLimit>{rentalCompany}</TextLimit>
            <span>|</span>
            <p>Premium</p>
          </ItemInfoFirst>
          <ItemInfoSecond>
            <p>{type}</p>
            <span>|</span>
            <TextLimit>{model}</TextLimit>
            <span>|</span>
            <p>{mileage}</p>
            <span>|</span>
            <TextLimit>{functionalities[0]}</TextLimit>
          </ItemInfoSecond>
        </ItemInfo>
        <ItemButton onClick={openModal}>Learn more</ItemButton>
        {isModalOpen && <Modal onClose={openModal} advert={advert} />}
      </CatalogItem>
    </>
  );
};

export default CatalogListItem;
