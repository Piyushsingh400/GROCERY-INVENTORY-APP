import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import './App.css';


class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Navbar />
        
        <Routes>
          <Route exact path="/" component={ItemList} />
          <Route path="/add" component={AddItem} />
          <Route path="/edit/:id" component={EditItem} />
        </Routes>
      

      </React.Fragment>
    )
  }
}


export default App;