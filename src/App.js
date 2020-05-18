import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm"
import Head from "./components/Head"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm/>
        <Head/>
        <ul>Todos:
          <li>Go to market</li>
          <li>Go to market</li>
          <li>Go to market</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
