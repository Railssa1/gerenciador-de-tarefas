import React, { Component } from 'react'

export default class TarefaLista extends Component {
    render() {
      return (
         <div className="justify-content-center align-items-center mt-4 border rounded p-4">
        <div className='row'>
          <div className='col-xxl-4'>
            <div className='flex-grow-2 border rounded mb-2 ms-4 me-4'>
              <h4 className='text-center'>Preparar aula de programação</h4>
              </div>
            </div>
          </div>
          <div className='row'>
          <div className='col-xxl-4'>
            <div className='flex-grow-2 border rounded mb-2 ms-4 me-4'>
              <h4 className='text-center'>Fazer feira</h4>
              </div>
            </div>
          </div>
          <div className='row'>
          <div className='col-xxl-4'>
            <div className='flex-grow-2 border rounded mb-2 ms-4 me-4'>
              <h4 className='text-center'>Preparar marmitas</h4>
              </div>
            </div>
          </div>
         </div>
    )
  }
}