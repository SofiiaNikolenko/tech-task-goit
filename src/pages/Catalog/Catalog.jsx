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

  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');

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

  const priceTolerance = 10;

  const filteredAdvertsByBrand =
    selectedBrand === 'All brands'
      ? adverts
      : adverts.filter(ad => ad.make === selectedBrand);

  const filteredAdvertsByPrice =
    selectedPrice === 'To $'
      ? filteredAdvertsByBrand
      : filteredAdvertsByBrand.filter(ad => {
          if (ad.rentalPrice === 'To $') {
            return true;
          }
          const rentalPrice = parseFloat(ad.rentalPrice.replace('$', ''));
          const priceDifference = Math.abs(
            rentalPrice - parseFloat(selectedPrice.replace('$', ''))
          );
          return priceDifference <= priceTolerance;
        });

  const filteredAdvertsByMileage = filteredAdvertsByPrice.filter(ad => {
    if (!selectedFrom || !selectedTo) {
      return true;
    }

    const mileage = parseInt(ad.mileage, 10);
    const from = parseInt(selectedFrom, 10);
    const to = parseInt(selectedTo, 10);

    return mileage >= from && mileage <= to;
  });

  return (
    <CatalogContainer>
      <CatalogFilter
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedFrom={selectedFrom}
        setSelectedFrom={setSelectedFrom}
        selectedTo={selectedTo}
        setSelectedTo={setSelectedTo}
      />
      <CatalogList
        adverts={filteredAdvertsByMileage.slice(0, visibleAdverts)}
      />
      {isLoading ? (
        <Loader />
      ) : (
        filteredAdvertsByMileage.length > 0 &&
        visibleAdverts < adverts.length && <ButtonLoadMore onClick={loadMore} />
      )}
    </CatalogContainer>
  );
};

export default Catalog;
