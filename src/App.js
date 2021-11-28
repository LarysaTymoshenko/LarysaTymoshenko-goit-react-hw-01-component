import Profile from './component/social-profile/Social-profile';
import Statistics from './component/statictic/Statistics';
import FriendList from './component/friends/FiendsList';
import './App.module.css';
import users from './data/user.json';
import data from './data/data.json';
import friend from './data/friends.json';

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
      </section>
    </div>
  );
}
