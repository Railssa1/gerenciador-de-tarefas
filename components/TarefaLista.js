import React, { Component } from 'react'

export default class TarefaLista extends Component {
  render() {
    const { tarefas } = this.props; 

    return (
      <div className="justify-content-center align-items-center mt-4 border rounded p-4">
        {tarefas.length === 0 ? (
          <h4 className="text-center">Nenhuma tarefa adicionada</h4>
        ) : (
          tarefas.map((tarefa, index) => (
            <div className="row" key={index}>
              <div className="col-12">
                <div className="flex-grow-2 border rounded mb-2 ms-4 me-4">
                  <h4 className="text-center">{tarefa}</h4>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    )
  }
}
