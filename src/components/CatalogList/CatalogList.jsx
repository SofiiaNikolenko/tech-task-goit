import React from 'react';
import { ListWrapper, CatalogListUl } from './CatalogList.style';
import CatalogListItem from './CatalogListItem/CatalogListItem';

const CatalogList = ({ adverts }) => {
  return (
    <ListWrapper>
      <CatalogListUl>
        {adverts.map(advert => (
          <CatalogListItem
            key={advert.id}
            img={advert.img}
            make={advert.make}
            model={advert.model}
            year={advert.year}
            rentalPrice={advert.rentalPrice}
            rentalCompany={advert.rentalCompany}
            type={advert.type}
            mileage={advert.mileage}
          />
        ))}
      </CatalogListUl>
    </ListWrapper>
  );
};

export default CatalogList;
