import { useEffect, useState } from 'react'
import './App.css'
import { fetchGallery } from './services/api';
import ImageGallery from './components/ImageGallery/imageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';


const API_KEY = "3u6K6vTQJGYFCILRp6LXEo_QO4JVBQWPGZlFQUU7AEM";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searchImages, setSearchImages] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!searchImages) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchGallery(
          searchImages,
          API_KEY,
          page
        );
        setGallery(prev => [...prev, ...results]);
      } catch {
        setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchImages, page]);

  const handleSetQuery = newQuery => {
    
    setGallery([]);
    setPage(1);
    setSearchImages(newQuery);
  };

  const handleOnClick = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  const handleSelectImage = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar handleSetQuery={handleSetQuery} />
      {isError && <ErrorMessage />}
      {gallery.length > 0 && (
        <>
          <ImageGallery gallery={gallery} onSelect={handleSelectImage} />
          <LoadMoreBtn onNextPage={handleOnClick} />
        </>
      )}
      {isLoading && <Loader />}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;


