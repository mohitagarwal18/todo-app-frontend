import React from 'react';
import { TodoContainer } from './TodoContainer';
import { TodoNavbar } from './TodoNavbar';

export class TodoApp extends React.Component{
  render(){
    return(
    <div>
      <TodoNavbar/>
      <div className="container">
        <TodoContainer/>
      </div>
    </div>
    )
  }
}