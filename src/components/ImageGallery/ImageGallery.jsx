import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import s from "./ImageGallery.module.css"

const ImageGallery = ({info, openModal}) => {
  return (
	  <div className={s.wrapper}>
		  <ul id='gallery' className={s.list}>
			  {info.map(({ urls: { small, regular }, user: { first_name, last_name }, alt_description, likes, id }) => (
          <li key={id} onClick={() => {openModal(regular)}} className={s.card}>
            <ImageCard
              small={small}
              regular={regular}
              altDesc={alt_description}
              likes={likes}
              fn={first_name ?? "unknown"}
              ln={last_name}
            />
          </li>
        ))}
            </ul>

	</div>
  )
}

export default ImageGallery
