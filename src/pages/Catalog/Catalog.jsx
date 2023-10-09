import { useEffect, useState } from 'react';
import CatalogFilter from 'components/CatalogFilter/CatalogFilter';
import CatalogList from 'components/CatalogList/CatalogList';
import { CatalogContainer } from './Catalog.style';

const Catalog = () => {
  return (
    <CatalogContainer>
      <CatalogFilter />
      <CatalogList />
    </CatalogContainer>
  );
};

export default Catalog;
