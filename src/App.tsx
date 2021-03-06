import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

function App() {
  const [userList, setUserList] = React.useState([])
  const [searchedList, setSearchedList] = React.useState([])
  const [sort, setSort] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")

  const url: string = "https://jsonplaceholder.typicode.com/users"

  React.useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((data) => setUserList(data))
    .catch((error) => console.log(error))
  }, [])

  function handleSort(e: any){
    setSort(prev => !prev)
    const clickedTitle: string = e.target.textContent.toLowerCase()
    if (clickedTitle in userList[0]) {

      if (clickedTitle && sort === false) {
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
    } else {
      alert("unable to sort by "+ clickedTitle)
    }
  }

  function handleChange(e: any) {
    const inpt = e.target.value.toLowerCase()
    setInputValue(inpt)
    setSearchedList(userList.filter(user => {
      return Object.values(user).includes(inpt)
      /* for(let value in user) {
        
        if (user[value] === e.target.value) {
          console.log("MATCH: ", user[value])
          return value
        }
      } */
    }))
  }


  console.log(inputValue)

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
        <input type="text" value={inputValue} name={inputValue} onChange={handleChange}/>
        <Table users={searchedList} handler={handleSort}/>
        <br/>
        <Table users={userList} handler={handleSort}/>
      </main>
    </div>
  );
}

export default App;
