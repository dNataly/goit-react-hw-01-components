import PropTypes from 'prop-types';
import styles from 'social-profile/Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.description}>
        <img className={styles.avatar} src={avatar} alt="Аватар пользователя" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className="label">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className="label">Views</span>
          <span className="quantity"> {stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
