import './card.scss';
import {Link} from 'react-router-dom';

const Card = ({
  name,
  jobTitle,
  education,
  id,
}) => {
  education = education != "professor"? education : "";
  return (
    <Link to={`/leadership/${id}`}>
      <div className="card">
          <div className="card-container">
              <h3>{name}{education && `, ${education}`}</h3>
              <p>{jobTitle}</p>
          </div>
      </div>
    </Link>
  )
}

export default Card;