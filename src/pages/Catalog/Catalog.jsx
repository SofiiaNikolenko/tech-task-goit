import { useEffect, useState } from 'react';
import axios from 'axios';

import CatalogFilter from 'components/CatalogFilter/CatalogFilter';
import CatalogList from 'components/CatalogList/CatalogList';
import { CatalogContainer } from './Catalog.style';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import Loader from 'components/Loader/Loader';

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [visibleAdverts, setVisibleAdverts] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedBrand, setSelectedBrand] = useState('All brands');
  const [selectedPrice, setSelectedPrice] = useState('To $');

  console.log('In catalog brands', selectedBrand);

  useEffect(() => {
    axios
      .get('https://652063d7906e276284c46988.mockapi.io/advert')
      .then(response => {
        setAdverts(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setIsLoading(false);
      });
  }, []);

  const loadMore = () => {
    setVisibleAdverts(prevVisibleAdverts => prevVisibleAdverts + 8);
  };

  const filteredAdvertsByBrand =
    selectedBrand === 'All brands'
      ? adverts
      : adverts.filter(ad => ad.make === selectedBrand);

  const filteredAdvertsByPrice =
    selectedPrice === 'To $'
      ? filteredAdvertsByBrand
      : filteredAdvertsByBrand.filter(ad => {
          const rentalPrice = parseFloat(ad.rentalPrice.replace('$', ''));
          return rentalPrice === parseFloat(selectedPrice.replace('$', ''));
        });

  return (
    <CatalogContainer>
      <CatalogFilter
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <CatalogList adverts={filteredAdvertsByPrice.slice(0, visibleAdverts)} />
      {isLoading ? (
        <Loader />
      ) : (
        visibleAdverts < adverts.length && <ButtonLoadMore onClick={loadMore} />
      )}
    </CatalogContainer>
  );
};

export default Catalog;
