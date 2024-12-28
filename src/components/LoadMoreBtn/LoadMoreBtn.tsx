import React, { FC } from 'react'
import s from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps {
  handleLoadMore: () => void
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({handleLoadMore}) => {
  return (
	<div className={s.wrapper}><button onClick={() => {handleLoadMore()}} className={s.btn}>Load more</button></div>
  )
}

export default LoadMoreBtn