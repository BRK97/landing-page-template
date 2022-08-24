import React from 'react'
import styles from './form.module.scss';

const Form = ({children, onSubmitHandler, errorMessage}) => {
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
        {errorMessage && (
            <p className={styles.errorMessage}>
                {errorMessage}
            </p>
        )}
        {children}
    </form>
  )
}

export default Form;