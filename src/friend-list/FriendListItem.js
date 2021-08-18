import PropTypes from 'prop-types';
import styles from 'friend-list/FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={styles.friendListItem} key={id}>
      <span className={isOnline ? styles.online : styles.offline}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default FriendListItem;
