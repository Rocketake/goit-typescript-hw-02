import { Field, Form, Formik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast'

import s from "./SearchBar.module.css"

import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
	handleQuery: (value: string) => void,
	query: string,
}

type formInitialValues = {
	query: string
}

const SearchBar: React.FC<SearchBarProps> = ({ handleQuery, query}) => {

	const initialValues: formInitialValues = {
	query: '',
	}
	
	const handleSubmit = (values: formInitialValues) => {
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