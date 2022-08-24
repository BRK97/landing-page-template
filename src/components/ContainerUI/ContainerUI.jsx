// import React from 'react';
import styles from './containerUI.module.scss';

const ContainerUI = ({children, isMainContainer = false, size = ''}) => {
  
  if(isMainContainer) {
    return <div className={styles.mainContainer}>{children}</div>;
  }

  return(
    <div className={`${styles.container} ${styles[size]}`}>{children}</div>
  )
  
}

export default ContainerUI