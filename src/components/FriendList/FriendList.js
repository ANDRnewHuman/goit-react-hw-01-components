import PropTypes from 'prop-types';

function FriendList({ children }) {
  return <ul className="friend-list">{children}</ul>;
}

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FriendList;
