import React from 'react';
import { ListWrapper, CatalogListUl } from './CatalogList.style';
import CatalogListItem from './CatalogListItem/CatalogListItem';

const CatalogList = ({ adverts }) => {
  return adverts.length === 0 ? (
    <p>Not found</p>
  ) : (
    <ListWrapper>
      <CatalogListUl>
        {adverts.map(advert => (
          <CatalogListItem key={advert.id} advert={advert} />
        ))}
      </CatalogListUl>
    </ListWrapper>
  );
};

export default CatalogList;
