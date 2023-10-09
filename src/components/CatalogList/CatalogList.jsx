import { ListWrapper, CatalogListUl } from './CatalogList.style';
import CatalogListItem from './CatalogListItem/CatalogListItem';

const CatalogList = () => {
  return (
    <ListWrapper>
      <CatalogListUl>
        <CatalogListItem />
        <CatalogListItem />
        <CatalogListItem />
        <CatalogListItem />
        <CatalogListItem />
      </CatalogListUl>
    </ListWrapper>
  );
};

export default CatalogList;
