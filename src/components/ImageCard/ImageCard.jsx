/* eslint-disable no-unused-vars */
import React from 'react'

import s from "./ImageCard.module.css"

const ImageCard = ({ small, regular, altDesc, desk, likes, fn, ln }) => {
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