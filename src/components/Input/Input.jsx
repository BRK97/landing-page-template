import React from 'react';
import styles from './input.module.scss';

const Input = ({
    type,
    id,
    label,
    value,
    setValue,
    isError,
    errorMessage,
    maxLength,
    onChange,
    isTextArea,
}) => {
    const inputChangeHandler = e => {
        setValue(e.target.value);
        if (onChange) onChange();
    };
    {if(isTextArea) return(
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <textarea
                id={id}
                className={`${styles.input} ${value && styles.hasText} ${(errorMessage || isError) && styles.errorInput}`}
                value={value}
                onChange={inputChangeHandler}
                />
                <label className={`${styles.label} ${errorMessage && styles.errorLabel}`} htmlFor={id}>
                    {label}
                </label>
                {errorMessage && (
                    <p className={styles.errorNotification}>
                        <BiErrorAlt/> {errorMessage}
                    </p>
                )}
            </div>
        </div>
    )}
    return (
    <div className={styles.wrapper}>
        <div className={styles.inner}>
            <input
            id={id}
            className={`${styles.input} ${value && styles.hasText} ${(errorMessage || isError) && styles.errorInput}`}
            value={value}
            onChange={inputChangeHandler}
            />
            <label className={`${styles.label} ${errorMessage && styles.errorLabel}`} htmlFor={id}>
                {label}
            </label>
            {errorMessage && (
                <p className={styles.errorNotification}>
                    <BiErrorAlt/> {errorMessage}
                </p>
            )}
        </div>
    </div>
    )
}

export default Input
