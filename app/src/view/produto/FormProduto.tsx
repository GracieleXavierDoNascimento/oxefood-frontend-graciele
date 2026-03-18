'use client'

import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";

export default function FormProduto() {

  const [titulo, setTitulo] = useState("");
  const [codigoProduto, setCodigoProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valorUnitario, setValorUnitario] = useState("");
  const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState("");
  const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState("");

  function salvar() {

    const produtoRequest = {
      titulo,
      codigoProduto,
      descricao,
      valorUnitario,
      tempoEntregaMinimo,
      tempoEntregaMaximo
    };

    axios.post("http://localhost:8080/produtos", produtoRequest)
      .then(() => {
        console.log("Produto cadastrado com sucesso");
      })
      .catch(() => {
        console.log("Erro ao cadastrar produto");
      });

  }

  return (
    <div style={{ marginTop: '3%' }}>
      <Container>

        <h2>
          <span style={{ color: 'darkgray' }}>
            Produto &nbsp;
            <Icon name="angle double right" size="small" />
          </span>
          Cadastro
        </h2>

        <Divider />

        <div style={{ marginTop: '4%' }}>
          <Form>

            <Form.Group widths="equal">

              <Form.Input
                required
                fluid
                label="Título"
                placeholder="Informe o título do produto"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />

              <Form.Input
                required
                fluid
                label="Código do Produto"
                placeholder="Informe o código do produto"
                value={codigoProduto}
                onChange={(e) => setCodigoProduto(e.target.value)}
              />

            </Form.Group>

            <Form.TextArea
              label="Descrição"
              placeholder="Informe a descrição do produto"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <Form.Group widths="equal">

              <Form.Input
                required
                fluid
                type="number"
                label="Valor Unitário"
                placeholder="Ex: 25.00"
                value={valorUnitario}
                onChange={(e) => setValorUnitario(e.target.value)}
              />

              <Form.Input
                fluid
                type="number"
                label="Tempo de Entrega Mínimo (min)"
                placeholder="Ex: 30"
                value={tempoEntregaMinimo}
                onChange={(e) => setTempoEntregaMinimo(e.target.value)}
              />

              <Form.Input
                fluid
                type="number"
                label="Tempo de Entrega Máximo (min)"
                placeholder="Ex: 40"
                value={tempoEntregaMaximo}
                onChange={(e) => setTempoEntregaMaximo(e.target.value)}
              />

            </Form.Group>

          </Form>

          <div style={{ marginTop: '4%' }}>

            <Button
              type="button"
              inverted
              circular
              icon
              labelPosition="left"
              color="orange"
            >
              <Icon name="list" />
              Listar
            </Button>

            <Button
              inverted
              circular
              icon
              labelPosition="left"
              color="blue"
              floated="right"
              onClick={() => salvar()}
            >
              <Icon name="save" />
              Salvar
            </Button>

          </div>

        </div>

      </Container>
    </div>
  );
}