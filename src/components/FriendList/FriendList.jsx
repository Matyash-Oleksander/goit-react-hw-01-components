import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

// console.log(FriendListItem);

export const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <ul className={css.friendList}>
      <FriendListItem key={friends.id} friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     })
//   ),
// };
