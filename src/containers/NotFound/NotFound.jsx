import './notFound.scss';
import {Link} from 'react-router-dom';
import {images} from '../../constants';

const NotFound = () => {
  return (
    <div className="notFound">
        <div className="notFound-container">
              <img src={images.error404} alt="" className="errorImg"/>
                {/* <h2>404</h2> */}
                <h2>This Page Could Not Be Found</h2>
            <Link to='/'> <button className="offset">Home</button> </Link>
        </div>
    </div>

  )
}

export default NotFound