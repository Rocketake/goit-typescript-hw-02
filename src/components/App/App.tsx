import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import { fetchRequest } from '../../services/api'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import ImageModal from '../ImageModal/ImageModal'
import { fetchImageData, ImageData } from './App.types'



const App = () => {

  const [query, setQuery] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [cards, setCards] = useState<ImageData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [nbPages, setNbPages] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>('')
  

  
  useEffect(() => {
    const getData = async () => {
      try {
        if (query === '') {
          return
        }
        setIsError(false)
        setIsLoading(true)
        const {results, total_pages} = await fetchRequest<fetchImageData>(query, page)
        setNbPages(total_pages);
        setCards((prev) => [...prev, ...results])
      } catch (error) {
        setIsError(true)
      }
      finally {
                setIsLoading(false)
      }
    }
    getData()
  }, [query, page])

  const handleQuery = (value: string): void => {
    setCards([])
    setPage(1)
    setQuery(value)
  }
  const handleLoadMore = (): void => {
    setPage(prev => prev + 1 )
  }

  function openModal(image: string): void {
    setIsOpen(true);
setModalImage(image)
  }

  function closeModal(): void {
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