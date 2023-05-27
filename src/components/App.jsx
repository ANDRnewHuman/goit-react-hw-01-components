import './App.css';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import friends from './friends.json';
import FriendListItem from './FriendList/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import data from './data.json';
import user from './user.json';
import transactions from './transactions.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </FriendList>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
