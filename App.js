import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'

export default class App extends React.Component{
  
  render(){
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h1 className="d-flex justify-content-center">Hello, tarefas</h1>
          </div>
        </div>   
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)