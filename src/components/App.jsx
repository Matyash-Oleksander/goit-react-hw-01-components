import { Profile } from './Profile/Profile';
import user from './data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';
import { Container } from './Container/Container';

export const App = () => {
  return (
    <div className="App">
      <Container>
        <Profile
          key={user.username}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        <Statistics key={data.id} title="Upload stats" stats={data} />
        <FriendList key={friends.id} friends={friends} />;
        <TransactionHistory key={transactions.id} items={transactions} />;
      </Container>
    </div>
  );
};
