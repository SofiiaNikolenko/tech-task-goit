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

  console.log(adverts);

  return (
    <CatalogContainer>
      <CatalogFilter />
      <CatalogList adverts={adverts.slice(0, visibleAdverts)} />
      {isLoading ? (
        <Loader />
      ) : (
        visibleAdverts < adverts.length && <ButtonLoadMore onClick={loadMore} />
      )}
    </CatalogContainer>
  );
};

export default Catalog;
