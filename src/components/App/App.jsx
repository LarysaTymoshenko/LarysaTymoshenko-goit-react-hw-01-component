import users from '../../data/user.json';
import data from '../../data/data.json';
import friend from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import Profile from '../Profile/Profile.jsx';
import Statistics from '../Statictics/Statistics.jsx';
import FriendList from '../FriendList/FiendsList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

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
        <FriendList friends={friend} />
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
}
