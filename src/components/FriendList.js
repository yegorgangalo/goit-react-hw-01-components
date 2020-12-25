import PropTypes from 'prop-types';
import Friend from "./Friend";

export default function FriendList({friends}) {
  return <ul className="friend-list">
      {friends.map(friend =>
          <li className="item" key={friend.id}>
          <Friend
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
          />
          </li>
            )}
  </ul>
};

FriendList.propTypes = {
    friends: PropTypes.array,
}