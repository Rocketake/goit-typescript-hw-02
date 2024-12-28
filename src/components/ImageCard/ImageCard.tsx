/* eslint-disable no-unused-vars */
import React, { FC } from 'react'

import s from "./ImageCard.module.css"


interface ImageCardProps  {
	small: string,
	altDesc: string,
	likes: number,
	fn: string,
	ln: string,
}

const ImageCard: FC<ImageCardProps> = ({ small, altDesc, likes, fn, ln }) => {
  return (
	  <div className={s.wrapper}>
		  <img className={s.image} src={small} alt={altDesc} />
		  <div className={s.info}><p>Likes: {likes}</p>
			  <p>Author: {fn}  {ln}</p>
		  </div>
	  </div>
	  
  )
}

export default ImageCard