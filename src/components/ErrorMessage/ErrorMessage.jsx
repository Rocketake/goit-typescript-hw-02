import React from 'react'

import s from "./ErrorMessage.module.css"

const ErrorMessage = () => {
  return (
	<div className={s.error}>Щось пішло не так, спробуйте ще раз!</div>
  )
}

export default ErrorMessage