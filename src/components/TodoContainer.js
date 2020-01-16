import React from 'react';
import Table from 'react-bootstrap/Table'

export class TodoContainer extends React.Component{
  render(){
    return(
    <div>
      <Table striped bordered hover className="todotable">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Created On</th>
            <th>Due Date</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>TODO 1</td>
            <td>12/01/2020</td>
            <td>13/01/2020</td>
            <td>VIEW|EDIT|DELETE</td>
          </tr>
          <tr>
            <td>1</td>
            <td>TODO 1</td>
            <td>12/01/2020</td>
            <td>13/01/2020</td>
            <td>VIEW|EDIT|DELETE</td>
          </tr>
        </tbody>
      </Table>
    </div>
    
    )
  }
}