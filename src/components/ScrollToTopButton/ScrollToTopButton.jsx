import {useState} from 'react';
import './scrollToTopButton.scss';
import { IoChevronUp } from 'react-icons/io5';

const ScrollToTop = () => {

    const [btnVisible, setBtnVisble] = useState(false);

    const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setBtnVisble(true) : setBtnVisble(false);
  };

  const onClickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button 
        className='scrollToTop' 
        onClick={onClickHandler}
        style={{
        visibility: btnVisible ? 'visible' : 'hidden',
        opacity: btnVisible ? '1' : '0',
        }}
    >
        <div className="scrollToTop-icon">
            <IoChevronUp/>
        </div>
    </button>
  )
}

export default ScrollToTop;