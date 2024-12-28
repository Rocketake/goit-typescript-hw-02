import { Field, Form, Formik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast'

import s from "./SearchBar.module.css"

import { IoSearch } from "react-icons/io5";

const SearchBar = ( {handleQuery} ) => {

	const initialValues = {
	query: '',
	}
	
	const handleSubmit = values => {
		if (values.query.trim() === '') {
			toast.error("Введіть текст!")
      return;
    }
		handleQuery(values.query)
	}
	
  return (
	  <div className={s.wrapper}>
		  <header>
		  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
			  <Form className={s.form}>
					  <Field
						  className={s.input}
						name="query"
						  placeholder="Search images and photos"
					  />
    				<button type="submit" className={s.btn}><IoSearch /></button>

			  </Form>
		  </Formik>
</header>
</div>
  )
}

export default SearchBar