import 'bootstrap/dist/css/bootstrap.min.css'
import 'primeflex/primeflex.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import TarefaEntrada from './components/TarefaEntrada'
import TarefaLista from './components/TarefaLista'

export default class App extends React.Component {

  state = {
    tarefas: []
  }

  onAdicionarTarefa = (termo) => {
    if (termo) {
      this.setState(
        (prevState) => ({
          tarefas: [...prevState.tarefas, termo]
        }),
        () => {
          localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
        }
      );
    }
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <TarefaEntrada onAdicionarTarefa={this.onAdicionarTarefa} />
            <TarefaLista tarefas={this.state.tarefas} />
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
