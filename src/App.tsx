import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

function App() {
  const [userList, setUserList] = React.useState([])

  const url: string = "https://jsonplaceholder.typicode.com/users"

  React.useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((data) => setUserList(data))
    .catch((error) => console.log(error))
  }, [])
  console.log(userList)

  interface User {
    adress: {},
    company: {},
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Table users={userList}/>
        {userList.map((user: User) => <p key={user.id}>{user.name}</p>)}
      </main>
    </div>
  );
}

export default App;
