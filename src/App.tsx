import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

function App() {
  const [userList, setUserList] = React.useState([])
  const [sort, setSort] = React.useState(false)

  const url: string = "https://jsonplaceholder.typicode.com/users"

  React.useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((data) => setUserList(data))
    .catch((error) => console.log(error))
  }, [])
  console.log(typeof userList)

  function handleSort(e: any){
    setSort(prev => !prev)
    const clickedTitle: string = e.target.textContent.toLowerCase()
    if (clickedTitle in userList[0]) {
      console.log("title " + clickedTitle +" is in userlist")
      if (clickedTitle && sort === false) {
        console.log(clickedTitle)
        setUserList(prevList => {
          return prevList.sort((a: any,b: any) => {
            if (a[clickedTitle] > b[clickedTitle]) {
              return -1;
            }
            if (a[clickedTitle] < b[clickedTitle]) {
              return 1;
            }
            return 0;
          })  
        })
      }
      if (clickedTitle && sort) {
        console.log(clickedTitle)
        console.log("before", userList)
        setUserList(prevList => {
          return prevList.sort((a: any,b: any) => {
            if (a[clickedTitle] < b[clickedTitle]) {
              return -1;
            }
            if (a[clickedTitle] > b[clickedTitle]) {
              return 1;
            }
            return 0;
          })  
        })
      }
      console.log("after",userList)
    } else {
      alert("unable to sort by "+ clickedTitle)
    }
    console.log("before", userList)
    
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
        <Table users={userList} handler={handleSort}/>
      </main>
    </div>
  );
}

export default App;
