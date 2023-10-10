import { ButtonLoad } from './ButtonLoadMore.style';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <>
      <ButtonLoad type="button" onClick={onClick}>
        Load more
      </ButtonLoad>
    </>
  );
};
export default ButtonLoadMore;
