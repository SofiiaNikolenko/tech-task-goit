import {
  CatalogItem,
  ImgContainer,
  HeartIcon,
  ItemImg,
  GradientOverlay,
  ItemTitle,
  ItemTitleName,
  ItemInfo,
  ItemInfoFirst,
  ItemInfoSecond,
  ItemButton,
} from './CatalogListItem.style';

const CatalogListItem = () => {
  return (
    <>
      <CatalogItem>
        <ImgContainer>
          <HeartIcon />
          <ItemImg
            src="https://picsum.photos/id/237/200/300"
            alt=""
            width="274"
          />
          <GradientOverlay />
        </ImgContainer>
        <ItemTitle>
          <ItemTitleName>
            <p>Make</p>
            <p style={{ color: '#3470ff' }}>Model</p>
            <p>Year</p>
          </ItemTitleName>
          <p>Price</p>
        </ItemTitle>
        <ItemInfo>
          <ItemInfoFirst>
            <p>Location</p>
            <span>|</span>
            <p>Country</p>
            <span>|</span>
            <p>Rentals</p>
            <span>|</span>
            <p>Premium</p>
          </ItemInfoFirst>
          <ItemInfoSecond>
            <p>Category</p>
            <span>|</span>
            <p>Model</p>
            <span>|</span>
            <p>Number</p>
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
