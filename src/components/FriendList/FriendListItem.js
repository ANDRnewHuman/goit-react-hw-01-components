import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        className="status"
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
