import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import { fetchRequest } from '../services/api'
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import ImageModal from './ImageModal/ImageModal'


const App = () => {

  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [nbPages, setNbPages] = useState(0);
  

  
  useEffect(() => {
    const getData = async () => {
      try {
        if (query === '') {
          return
        }
        setIsError(false)
        setIsLoading(true)
        const {results, total_pages} = await fetchRequest(query, page)
        setNbPages(total_pages);
  setCards(prev => [...prev, ...results])
      } catch (error) {
        setIsError(true)
      }
      finally {
                setIsLoading(false)
      }
    }

    getData()
  }, [query, page])

  const handleQuery = (value) => {
    console.log(query);
    setCards([])
    setPage(1)
    setQuery(value)

  }
  const handleLoadMore = () => {
    setPage(prev => prev + 1 )
  }

  
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('')

  function openModal(image) {
    setIsOpen(true);
setModalImage(image)
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <SearchBar handleQuery={handleQuery} query={query} />
      {isError && <ErrorMessage/>}
      <ImageGallery info={cards} openModal={openModal} />
      {cards.length !== 0 && nbPages > page && <LoadMoreBtn handleLoadMore={handleLoadMore}/>}
      {isLoading && <Loader />}
      {isOpen && <ImageModal isOpen={isOpen} closeModal={closeModal} modalImage={modalImage} />}
    </div>
  )
}

export default App