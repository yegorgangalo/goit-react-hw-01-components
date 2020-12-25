import PropTypes from 'prop-types';
import Friend from "./Friend";

export default function FriendList({friends}) {
  return <ul className="friend-list">
      {friends.map(({id, avatar, name, isOnline}) =>
          <li className="item" key={id}>
          <Friend
              avatar={avatar}
              name={name}
              isOnline={isOnline}
          />
          </li>
            )}
  </ul>
};

FriendList.propTypes = {
    friends: PropTypes.array,
}