import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Image from './pages/MainPage';
import History from './pages/History';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Image />
        </Route>

        <Route path="/history">
          <History />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
