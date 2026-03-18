'use client'

import { Segment } from 'semantic-ui-react'
import FormCliente from '../src/view/cliente/FormCliente'

export default function CadastroClientePage() {
  return (
    <div>

      <FormCliente />

      <div style={{ marginTop: '6%' }}>
        <Segment
          vertical
          color='grey'
          size='tiny'
          textAlign='center'
        >
          &copy; 2025 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  )
}