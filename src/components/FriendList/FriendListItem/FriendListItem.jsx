import PropTypes from 'prop-types';
import css from '../FriendList.module.css';

export const FriendListItem = ({ friends }) => {
  // console.log(friends);
  return (
    <div>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={css.statusTrue}>{friend.isOnline}</span>
          ) : (
            <span className={css.statusFalse}>{friend.isOnline}</span>
          )}

          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="90"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </div>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
