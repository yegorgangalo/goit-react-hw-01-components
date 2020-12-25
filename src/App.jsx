import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from './components/TransactionHistory';

import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from "./json/transactions.json";

const { name, tag, location, avatar, stats:{followers, views, likes}} = user;

export default function App() {
    return (<div>
        <Profile
            name={name}
            tag={tag}
            location={location}
            avatar={avatar}
            followers={followers}
            views={views}
            likes={likes}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>);
}