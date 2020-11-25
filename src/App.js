import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Book from './components/Book'

function App() {
  const[login, setLoggedIn] = useState(true)

  console.log("from APP.js",login)
  return <div className="App">
    <Sidebar />
    <Header login={login}/>
    <Book />
  </div>;
}

export default App;
