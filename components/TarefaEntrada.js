import React, { Component } from 'react'

export default class TarefaEntrada extends Component {
  render() {
    return (
      <div className="justify-content-center align-items-center">
        <div className="mb-3">
          <input type="text" className="form-control text-center p-3" id="entrada-tarefa" placeholder="Digite a descrição de uma nova tarefa" />
        </div>
        <div className='mt-1'>
          <button className='btn btn-primary w-100 p-3'>OK</button>
        </div>
      </div>
    )
  }
}