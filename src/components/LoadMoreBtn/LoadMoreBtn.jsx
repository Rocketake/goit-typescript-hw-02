import React from 'react'
import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({handleLoadMore}) => {
  return (
	<div className={s.wrapper}><button onClick={() => {handleLoadMore()}} className={s.btn}>Load more</button></div>
  )
}

export default LoadMoreBtn