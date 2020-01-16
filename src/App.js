import React from 'react';
import './App.css';
import {TodoNavbar} from './components/TodoNavbar'
import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <div>
      <TodoNavbar />
      <TodoApp />
    </div>
  );
}

export default App;
