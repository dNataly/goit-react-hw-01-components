import './App.css';

import FriendList from 'friend-list/FriendList.js';
import Profile from 'social-profile/Profile.js';
import Statistics from 'statistics/Statistics.js';
import TransactionHistory from 'transaction-history/TransactionHistory.js';

import friends from 'friend-list/friends.json';
import user from 'social-profile/user.json';
import statisticalData from 'statistics/statistical-data.json';
import transactions from 'transaction-history/transactions.json';

function App() {
  return (
    <div className="App">
      <h1>goit-react-hw-01-components</h1>
      <h2>FriendList</h2>
      <FriendList friends={friends} />
      <h2>Profile</h2>
      <Profile user={user} />
      <h2>Statistics</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>TransactionHistory</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
