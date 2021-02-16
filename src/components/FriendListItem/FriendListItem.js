import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function Friend(props) {
  const { id, avatar, name, isOnline } = props;
  return (
    <li className={s.item} key={id}>
      <span className={`${s.status} ${isOnline && s.online}`}></span>
      <img className={s.avatar} src={avatar} alt="avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
