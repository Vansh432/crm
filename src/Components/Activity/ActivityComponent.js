// ActivityItem.js

import './Activity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

const ActivityItem = ({ icon, title, description, images, time, timeAgo, highlight }) => {
  return (
    <div className="activity-item">
      <div className="activity-icon ">
      <FontAwesomeIcon icon={faBox} />
      </div>
      <div className="activity-details">
        <h4>{title}</h4>
        <p>{description}</p>
        {images && (
          <div className="activity-images">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Related Image ${index}`} />
            ))}
          </div>
        )}
        {highlight && <p className="highlight">{highlight}</p>}
      </div>
      <div className="activity-time">
        <p>{timeAgo}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
