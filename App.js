import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import TarefaEntrada from './components/TarefaEntrada'

export default class App extends React.Component{
  
  render(){
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <TarefaEntrada />
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