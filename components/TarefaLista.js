import React, { Component } from 'react'

export default class TarefaLista extends Component {
  onRemoveTarefa = (index) => {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.splice(index, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    this.setState({});
  };

  render() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    return (
      <div className="justify-content-center align-items-center mt-4 border rounded p-4">
        {tarefas.length === 0 ? (
          <h4 className="text-center">Nenhuma tarefa adicionada</h4>
        ) : (
          tarefas.map((tarefa, index) => (
            <div className="row" key={index}>
              <div className="col-12">
                <div className="flex-grow-2 border rounded mb-2 ms-4 me-4">
                  <div className="row">
                    <div className="col-sm-8 col-md-9">
                      <h4 className="text-center">{tarefa}</h4>
                    </div>
                    <div className="col-sm-4 col-md-3 d-flex justify-content-end align-items-center">
                      <button className="btn btn-danger" style={{ width: '100px' }} onClick={() => this.onRemoveTarefa(index)}>
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    )
  }
}
