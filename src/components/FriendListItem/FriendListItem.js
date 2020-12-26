import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function Friend(props) {
  const { avatar, name, isOnline } = props;
  return (
    <>
      <span className={`${s.status} ${isOnline && s.online}`}></span>
      <img className={s.avatar} src={avatar} alt="avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
