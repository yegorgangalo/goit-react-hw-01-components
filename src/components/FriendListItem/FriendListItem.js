import PropTypes from 'prop-types';
// import s from "./FriendlistItem.module.css";

export default function Friend(props) {
  const { avatar, name, isOnline } = props;
  return (
    <>
      {isOnline ? (
        <span className="status on"></span>
      ) : (
        <span className="status off"></span>
      )}
      <img className="avatar" src={avatar} alt="avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};