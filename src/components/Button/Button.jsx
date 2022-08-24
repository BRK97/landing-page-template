// import React    from 'react';
import styles   from './button.module.scss';

const Button = ({
  children,
  btnType = 'button',
  btnClasses = [],
  onClickHandler,
  isLink,
  itemId
}) => {
  const classes = btnClasses.map(className => styles[className]).join(' ');

  if(isLink) {
    return(
      <Link 
        to={`${itemId}`}  
        className={`${styles.btn} ${classes}`}
      >
        {children}
      </Link>
    )
  }

  return(
    <button
      type={btnType}
      className={`${styles.btn} ${classes}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}

export default Button;