import { useDispatch, useSelector } from "react-redux";
import styles from "./PhotosLoadMore.module.css";
import { loadNewPhotos } from "../store/photos";
import Loading from "../components/Loading";

const PhotosLoadMore = () => {
  const { pages, infinite, loading } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadNewPhotos(pages + 1));
  };

  if (loading) return <Loading />;
  if (!infinite) return null;
  return (
    <button className={styles.btn} onClick={handleClick}>
      +
    </button>
  );
};

export default PhotosLoadMore;
