import users from './data/user.json';
import data from './data/data.json';
import friend from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './component/Profile/Profile.jsx';
import Statistics from './component/Statictics/Statistics.jsx';
import FriendList from './component/FriendList/FiendsList.jsx';
import TransactionHistory from './component/TransactionHistory/TransactionHistory.jsx';

export default function App() {
  return (
    <div className="App">
      <section>
        <Profile
          username={users.username}
          avatar={users.avatar}
          tag={users.tag}
          location={users.location}
          stats={users.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <TransactionHistory items={transactions} />
        <FriendList friends={friend} />
      </section>
    </div>
  );
}
