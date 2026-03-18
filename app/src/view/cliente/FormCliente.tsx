'use client'

import React, { useState } from "react";
import axios from "axios";
import { IMaskInput } from "react-imask";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";

export default function FormCliente() {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [foneCelular, setFoneCelular] = useState("");
  const [foneFixo, setFoneFixo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  function salvar() {

    let dataFormatada = null;

    if (dataNascimento && dataNascimento.length === 10) {
      const partes = dataNascimento.split("/");
      dataFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`;
    }

    const clienteRequest = {
      nome,
      cpf,
      foneCelular,
      foneFixo,
      dataNascimento: dataFormatada
    };

    axios.post("http://localhost:8080/clientes", clienteRequest)
      .then(() => {
        console.log("Cliente cadastrado com sucesso");
      })
      .catch(() => {
        console.log("Erro ao cadastrar cliente");
      });

  }

  return (
    <div style={{ marginTop: '3%' }}>
      <Container textAlign="justified">

        <h2>
          <span style={{ color: 'darkgray' }}>
            Cliente &nbsp;
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
                label="Nome"
                maxLength={100}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <Form.Field required>
                <label>CPF</label>
                <IMaskInput
                  mask="000.000.000-00"
                  className="ui input"
                  value={cpf}
                  onAccept={(value) => setCpf(value)}
                />
              </Form.Field>

            </Form.Group>

            <Form.Group>

              <Form.Field width={6}>
                <label>Fone Celular</label>
                <IMaskInput
                  mask="(00) 00000-0000"
                  className="ui input"
                  value={foneCelular}
                  onAccept={(value) => setFoneCelular(value)}
                />
              </Form.Field>

              <Form.Field width={6}>
                <label>Fone Fixo</label>
                <IMaskInput
                  mask="(00) 0000-0000"
                  className="ui input"
                  value={foneFixo}
                  onAccept={(value) => setFoneFixo(value)}
                />
              </Form.Field>

              <Form.Field width={6}>
                <label>Data Nascimento</label>
                <IMaskInput
                  mask="00/00/0000"
                  placeholder="Ex: 20/03/1985"
                  className="ui input"
                  value={dataNascimento}
                  onAccept={(value) => setDataNascimento(value)}
                />
              </Form.Field>

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
              <Icon name="reply" />
              Voltar
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