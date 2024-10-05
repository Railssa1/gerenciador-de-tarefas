import React, { Component } from 'react'

export default class TarefaEntrada extends Component {
  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (evento) => {
    this.setState({ termoDeBusca: evento.target.value })
  }

  onFormSubmit = (evento) => {
    evento.preventDefault()
    this.props.onAdicionarTarefa(this.state.termoDeBusca)
    this.setState({ termoDeBusca: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="justify-content-center align-items-center">
          <div className="mb-3">
            <input type="text"
              className="form-control text-center p-3"
              value={this.state.termoDeBusca} 
              onChange={this.onTermoAlterado}
              id="entrada-tarefa"
              placeholder={this.props.dica} />
          </div>
          <div className='mt-1'>
            <button 
              className='btn btn-primary w-100 p-3'>OK</button>
          </div>
        </div>
      </form>
    )
  }
}

TarefaEntrada.defaultProps = {
  dica: "Digite a descrição de uma nova tarefa"
}
